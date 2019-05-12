class PostModel {

  constructor()
  {
    this._photoPosts = [];
    PostModel.count = 1;
  }

  _addTransformation(post) {
    this._photoPosts.push({
      _id: post.id,
      _descriprion: post.descriprion,
      _createdAt: PostModel._transformationDate(post.createdAt),
      _author: post.author,
      _photoLink: post.photoLink,
      _likes: post.likes,
      _hashtags: post.hashtags
    });
  }

  getPhotoPost(id) {
    return this._photoPosts.find(function (post) {
      if (post._id == id) {
        return post;
      }
    })
  }

  getAllPosts() {
    return this._photoPosts;
  }


  editPhotoPost(id, photoPost) {
    let editPost = this.getPhotoPost(id);
    if (editPost) {
      if (photoPost.descriprion) {
        editPost._descriprion = photoPost.descriprion;
      }
      if (photoPost.photoLink) {
        editPost._photoLink = photoPost.photoLink;
      }
      if (photoPost.hashtags.length != 0) {
        editPost._hashtags = photoPost.hashtags;
      }
      return true;
    }
    return false;
  }

  removePhotoPost(id) {
    let index = this._photoPosts.findIndex(function (post) {
      if (post._id == id) {
        return post;
      }
    });
    if (index != -1) {
      this._photoPosts.splice(index, 1);
      return true;
    }
    return false;
  }

  static _debug(posts) {
    console.log('Filter : \n');
    posts.map((v1) => {
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
    if (filterConfig.hashtags.length !== 0 || filterConfig.author !== "" || filterConfig.createdAt != 'Invalid Date') {
      filterPhotoPosts = this._photoPosts.filter((post) => {
        let isTag = true;
        let isAut = true;
        let isDate = true;
        if (filterConfig.hashtags.length != 0) {
          isTag = filterConfig.hashtags.every(function (filterHashTag) {
            return (post._hashtags.some(postTag => postTag === filterHashTag));
          });
        }

        isAut = filterConfig.author == "" || filterConfig.author == null || (post._author === filterConfig.author);

       let newDate = new Date(post._createdAt);
       isDate = filterConfig.createdAt == 'Invalid Date' || newDate.toISOString().substr(0, 16) == (filterConfig.createdAt.toISOString().substr(0, 16));
    
        filterPhotoPosts = filterPhotoPosts.slice(skip, allLen);
        return isAut && isTag && isDate;
      });
    }
    else {
      filterPhotoPosts = this._photoPosts.slice(skip, allLen);
    }
    // if (filterPhotoPosts.length != 0)
    //   filterPhotoPosts.sort(function (PhotoPost1, PhotoPost2) {
    //     return new Date(PhotoPost2._createdAt)
    //       - new Date(PhotoPost1._createdAt)
    //   });

    return filterPhotoPosts;
  }
  getLenghtPosts() {
    return this._photoPosts.length;
  }

  getDownMore(skip, top) {
    return this._photoPosts.slice(skip, top);
  }

  getAuthor() {
    let listAuthor = [];

    this._photoPosts.some((post) => {
      if (listAuthor.every(author => author != post._author)) {
        listAuthor.push(post._author);
      }
    });

    return listAuthor;
  }
  getDates() {
    let listDates = [];

    this._photoPosts.some((post) => {
      if (listDates.every(date => date != post._createdAt)) {
        listDates.push(post._createdAt);
      }
    });

    return listDates;

  }

  getHashTags() {
    let listTags = [];
    this._photoPosts.some((post) => {
      for (let i = 0; i < post._hashtags.length; i++) {
        if (listTags.every(tag => tag != post._hashtags[i])) {
          listTags.push(post._hashtags[i]);
        }
      }
    });
    return listTags;
  }


  static _validateDescription(photoPost) {
    if (typeof (photoPost.descriprion) != 'string') {
      return false;
    }
    else if (photoPost.descriprion.length > 200 || photoPost.descriprion == null) {
      return false;
    }
    return true;
  }

  static _validateCreatedAt(photoPost) {
    if (!(photoPost.createdAt instanceof Date)) {
      return false;
    }
    if (photoPost.createdAt == null) {
      return false;
    }
    return true;
  }

  static _validateAutor(photoPost) {
    if (typeof (photoPost.author) != 'string') {
      return false;
    }
    if (photoPost.author == null) {
      return false;
    }
    return true;
  }

  static _validatePhotoLink(photoPost) {
    if (typeof (photoPost.photoLink) != 'string') {
      return false;
    }
    if (photoPost.photoLink == null) {
      return false;
    }
    return true;
  }

  static _validateHashtags(photoPost) {
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

  static _validateLikes(photoPost) {
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
    if (post != undefined) {
      return PostModel._validateDescription(post)
        & PostModel._validateCreatedAt(post)
        & PostModel._validateAutor(post)
        & PostModel._validatePhotoLink(post)
        & PostModel._validateHashtags(post)
        & PostModel._validateLikes(post);
    }
  }

  static setId(post)
  {
    post.id = 'post'+PostModel.count;
    PostModel.count++;
  }

  addPhotoPost(photoPost) {
    if (PostModel._validatePhotoPost(photoPost)) {
      PostModel.setId(photoPost);
      this._addTransformation(photoPost);
      return true;
    }
    return false;
  }

  addAll(posts) {
    let notValidate = [];
    posts.forEach(post => {
      if (this._photoPosts.some(Post => post.id === Post._id)) {
        notValidate.push(post);
      }
      else if (PostModel._validatePhotoPost(post)) {
        this._addTransformation(post);
      }
      else {
        notValidate.push(post);
      }
    });
    return notValidate;
  }

  addLikeToPost(id, user){
    let post = this.getPhotoPost(id);
    if(post){
      if(!post._likes.some(post_like => post_like === user.getUserName()))
      {
        post._likes.push(user.getUserName());
        return true;
      }
      else{
        post._likes.splice(post._likes.indexOf(user.getUserName()));
        return false;
      }
    }
  }
  clear(){
    this._photoPosts = null;
    this._photoPosts = [];
    this._lenght = 0
  }

  save() {
    for (let i = 0; i < this._photoPosts.length; i += 1) {
      localStorage.setItem(`id${i}`, this._photoPosts[i]._id);

      localStorage.setItem(`de${i}`, this._photoPosts[i]._descriprion);
      let d = new Date(this._photoPosts[i]._createdAt);
      localStorage.setItem(`ca${i}`, d.toISOString());
      localStorage.setItem(`au${i}`, this._photoPosts[i]._author);
      localStorage.setItem(`pl${i}`, this._photoPosts[i]._photoLink);
      for (let j = 0; j < this._photoPosts[i]._hashtags.length; j += 1) {
        localStorage.setItem(`ht${i}|${j}`, this._photoPosts[i]._hashtags[j]);
      }
      localStorage.setItem(`htl${i}`, this._photoPosts[i]._hashtags.length);
      for (let j = 0; j < this._photoPosts[i]._likes.length; j += 1) {
        localStorage.setItem(`li${i}|${j}`, this._photoPosts[i]._likes[j]);
      }
      localStorage.setItem(`lkl${i}`, this._photoPosts[i]._likes.length);
    }
    localStorage.setItem('co', this._photoPosts.length);
  }

  restore() {
    const stop = localStorage.getItem('co');
    for (let j = 0; j < stop; j += 1) {
      let len = localStorage.getItem(`htl${j}`);
      let hash = [];
      for (let h = 0; h < len; h += 1) {
        hash.push( localStorage.getItem(`ht${j}|${h}`));
      }
      len = localStorage.getItem(`lkl${j}`);
      let likes1 = [];
      for (let h = 0; h < len; h += 1) {
        likes1.push(localStorage.getItem(`li${j}|${h}`));
      }
      let photoPost = {
        id: localStorage.getItem(`id${j}`),
        descriprion : localStorage.getItem(`de${j}`),
        createdAt : new Date(localStorage.getItem(`ca${j}`)),
        author : localStorage.getItem(`au${j}`),
        photoLink: localStorage.getItem(`pl${j}`),
        hashtags : hash,
        likes: likes1
      }
      this.addPhotoPost(photoPost);
    
    }
  }
}