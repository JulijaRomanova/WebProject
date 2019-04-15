class PostModel {
  
    constructor(posts) {
      this._photoPosts = [] ;
      posts.forEach(post => {
        this._photoPosts.push({
          _id: post.id,
          _descriprion : post.descriprion,
          _createdAt : PostModel._transformationDate(post.createdAt),
          _author : post.author,
          _photoLink : post.photoLink,
          _likes : post.likes,
          _hashtags : post.hashtags
        });
      });
    }
  
    _addTransformation(post) {
      this._photoPosts.push({
        _id: post.id,
        _descriprion : post.descriprion,
        _createdAt : PostModel._transformationDate(post.createdAt),
        _author : post.author,
        _photoLink : post.photoLink,
        _likes : post.likes,
        _hashtags : post.hashtags
      });
    }
  
     getPhotoPost(id) {
      for (var i = 0; i < this._photoPosts.length; i++) {
        if (this._photoPosts[i]._id == id) {
          return this._photoPosts[i];
        }
      }
    }

    getAllPosts()
    {
        return this._photoPosts;
    }
    
  
    editPhotoPost(id, photoPost) {
      for (var i = 0;i< this._photoPosts.length;  i++) {
        if (this._photoPosts[i]._id == id) {
          if (photoPost.descriprion != null) {
            this._photoPosts[i]._descriprion = photoPost.descriprion;
          }
          if (photoPost.photoLink != null) {
            this._photoPosts[i]._photoLink = photoPost.photoLink;
          }
          if (photoPost.hashtags.length != 0) {
            this._photoPosts[i]._hashtags = photoPost.hashtags;
          }
          return true;
        }
      }
      return false;
    }
  
    removePhotoPost(id) {
      for (var i = 0 ; i < this._photoPosts.length; i++) {
        if (this._photoPosts[i]._id == id) {
          this._photoPosts.splice(i, 1);
          return true;
        }
      }
      return false;
    }
  
    static _debug (Posts)
    {
      console.log('Filter : \n');
      Posts.map((v1) => {
        console.log(v1)
      });
    }

    static _transformationDate(date) {
      let dateСomponents = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      };
      let timeСomponents = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: false
      };
      return (date.toLocaleDateString('en-US', dateСomponents) + ' ' + date.toLocaleTimeString('en-US', timeСomponents));
    }
  
    getPhotoPosts(skip = 0, top = 10, filterConfig) {
      let filterPhotoPosts = [];
      let allLen = skip + top;
      if (skip + top > this._photoPosts.length) {
        allLen = this._photoPosts.length;
      }
      if (filterConfig.hashtags.length !== 0 || filterConfig.author !== "" ) {
        filterPhotoPosts = this._photoPosts.filter((post) => {
          let isTag = true;
          let isAut = true;
          let isDate = true;
          if (filterConfig.hashtags && filterConfig.hashtags.length != 0) {
            isTag = filterConfig.hashtags.every(function (filterHashTag) {
              return (post._hashtags.some(postTag => postTag === filterHashTag));
            });
          }
          isAut = !filterConfig.author|| filterConfig.author == null || (post._author === filterConfig.author);
  
          
          //isDate = !filterConfig.createdAt || post._createdAt.toString().indexOf(filterConfig.createdAt);
  
          filterPhotoPosts = filterPhotoPosts.slice(skip, allLen);
          return isAut && isTag && isDate;
        });
      }
      else
      {
        //console.log("Test!"+this._photoPosts[5]._createdAt.toISOString());
        filterPhotoPosts = this._photoPosts.slice(skip, allLen);
      }
   
      if(filterPhotoPosts.length !=0)
      filterPhotoPosts.sort(function (PhotoPost1, PhotoPost2) { return PhotoPost2._createdAt 
          - PhotoPost1._createdAt });

      //PostModel._debug(filterPhotoPosts);
      
      return filterPhotoPosts;
    }

    getAuthor ()
    {
      let listAuthor = [];
      
       this._photoPosts.some ((post)=>
        {
          if(listAuthor.every( author => author != post._author))
          {
            listAuthor.push(post._author);
          }
        });
           
      return listAuthor;
    }
    getDates()
    {
      let listDates = [];

      this._photoPosts.some ((post)=>
      {
        if(listDates.every( date => date != post._createdAt))
        {
          listDates.push(post._createdAt);
        }
      });
         
    return listDates;

    }  

    getHashTags()
    {
      let listTags = [];
      this._photoPosts.some ((post)=>
      {
        for  (let i =0; i<post._hashtags.length; i++)
        {
          if(listTags.every( tag => tag != post._hashtags[i]))
          {
            listTags.push(post._hashtags[i]);
          }
        }
      });
      return listTags;
    }
    
    static _validateId(photoPost) {
      if (typeof (photoPost.id) != 'string') {
        return false;
      }
     
      return true;
    }
  
     static _validateDescription(photoPost){
      if (typeof (photoPost.descriprion) != 'string') {
        return false;
      }
      else if (photoPost.descriprion.length > 200 || photoPost.descriprion == null) {
        return false;
      }
      return true;
    }
  
    static _validateCreatedAt(photoPost){
      if (!(photoPost.createdAt instanceof Date)) {
        return false;
      }
      if (photoPost.createdAt == null) {
        return false;
      }
      return true;
    }
  
     static _validateAutor(photoPost){
      if (typeof (photoPost.author) != 'string') {
        return false;
      }
      if (photoPost.author == null) {
        return false;
      }
      return true;
    }
  
     static _validatePhotoLink(photoPost){
      if (typeof (photoPost.photoLink) != 'string') {
        return false;
      }
      if (photoPost.photoLink == null) {
        return false;
      }
      return true;
    }
  
     static _validateHashtags(photoPost){
      if (photoPost.hashtags == undefined) {
        return false;
      }
      else {
        for (let i = 0; i < photoPost.hashtags.length; i++) {
          if (typeof (photoPost.hashtags[i]) != 'string') {
            return false;
          }
        }
      }
      return true;
    }
  
     static _validateLikes(photoPost){
      if (photoPost.likes == undefined) {
        return false;
      }
      else {
        for (let i = 0; i < photoPost.likes.length; i++) {
          if (typeof (photoPost.likes[i]) != 'string') {
            return false;
          }
        }
      }
      return true;
    }
  
     static _validatePhotoPost(post) {
      if (post != undefined){
        return PostModel._validateId(post)
        & PostModel._validateDescription(post)
        & PostModel._validateCreatedAt(post)
        & PostModel._validateAutor(post)
        & PostModel._validatePhotoLink(post)
        & PostModel._validateHashtags (post)
        & PostModel._validateLikes(post);
      }
    }
  
     addPhotoPost(photoPost) {
      if (PostModel._validatePhotoPost(photoPost)) {
        this._addTransformation(photoPost);
        return true;
      }
      return false; 
    }
  
    addAll (posts){
      let notValidate = [];
      posts.forEach( post => 
        {
          if (this._photoPosts.some(Post => post.id === Post._id)) {
            notValidate.push(post);
          }
          else if (PostModel._validatePhotoPost (post)) {
            this._addTransformation(post);
          }
          else
          {
            notValidate.push(post);
          }
        });
        return notValidate;
    }
  
    // writePosts (){
    //   this._photoPosts.map((v1) => {
    //     console.log(v1)
    //   });
    // }
  
  }