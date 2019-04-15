class PostModel {
  
  constructor(posts) {
    this._photoPosts = [] ;
    posts.forEach(post => {
      this._photoPosts.push({
        _id: post.id,
        _descriprion : post.descriprion,
        _createdAt : post.createdAt,
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
      _createdAt : post.createdAt,
      _author : post.author,
      _photoLink : post.photoLink,
      _likes : post.likes,
      _hashtags : post.hashtags
    });
  }

   getPhotoPost(getid) {
    for (var i = 0; i < this._photoPosts.length; i++) {
      if (this._photoPosts[i]._id == getid) {
        return this._photoPosts[i];
      }
    }
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

  static _writePosts (Posts)
  {
    console.log('Filter : \n');
    Posts.map((v1) => {
      console.log(v1)
    });
  }

  getPhotoPosts(skip = 0, top = 10, filterConfig) {
    let sortPhotoPosts = [];
    let allLen = skip + top;
    if (skip + top > this._photoPosts.length) {
      allLen = this._photoPosts.length;
    }
    if (filterConfig) {
      for (var i = skip; i < allLen; i++) {
        let isTag = true;
        let isAut = true;
        let isDate = true;
        isTag = filterConfig.hashtags ? ((filterConfig.hashtags.every(filterHashTag =>
          this._photoPosts[i]._hashtags.some(postTag => postTag === filterHashTag))) ? true : false) : true;

        isAut = filterConfig.author ?
          ((this._photoPosts[i]._author === filterConfig.author) ? true : false) : true;

        isDate = filterConfig.createdAt ?
          ((~this._photoPosts[i]._createdAt.toISOString().indexOf(filterConfig.createdAt)) ? true : false) : true;

        if (isAut && isTag && isDate) {
          sortPhotoPosts.push(this._photoPosts[i]);
        }
      }
    }
    else {
      for (var m = skip; m < allLen; m++) {
        sortPhotoPosts.push(this._photoPosts[m]);
      }
    }
    sortPhotoPosts.sort(function (PhotoPost1, PhotoPost2) { return PhotoPost1._createdAt - PhotoPost2._createdAt });
    PostModel._writePosts(sortPhotoPosts);
    
    return sortPhotoPosts;
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

   static validatePhotoPost(post) {
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
    if (PostModel.validatePhotoPost(photoPost)) {
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
        else if (PostModel.validatePhotoPost (post)) {
          this._addTransformation(post);
        }
        else
        {
          notValidate.push(post);
        }
      });
      return notValidate;
  }

  writePosts (){
    this._photoPosts.map((v1) => {
      console.log(v1)
    });
  }

}


let photoPosts = [

  {
    id: '1',
    descriprion: 'Good memory! I graduated from music school . Music is what I like !',
    createdAt: new Date('2019-02-21T16:30:00'),
    author: 'Romanova Julia',
    photoLink: 'img/nature.jpg',
    likes: [],
    hashtags: ['#BSU', '#FPMI', '#like']

  },

  {
    id: '2',
    descriprion: 'Nature is beautiful!',
    createdAt: new Date('2019-02-11T12:12:00'),
    author: 'Miriniv Misha',
    photoLink: 'img/2.jpg',
    likes: [],
    hashtags: ['#BSU', '#FPMI']
  },

  {
    id: '3',
    descriprion: ' Gorgeous sunsets, beautiful countryside, the best people-that is what is sometimes missing...',
    createdAt: new Date('2019-01-10T17:30:00'),
    author: 'Alena Holubeva',
    photoLink: 'img/3.jpg',
    likes: ['Plaschinsky Ekler', 'Kitaev Ivan'],
    hashtags: ['#BSU', '#FPMI', '#2123']
  },

  {
    id: '4',
    descriprion: 'Photos are different ...',
    createdAt: new Date('2018-12-15T16:30:00'),
    author: 'Elizaveta Novichenko',
    photoLink: 'img/4.jpg',
    likes: [],
    hashtags: []
  },

  {
    id: '5',
    descriprion: 'Sometimes you just need to get to an unfamiliar city and look at everything from a different angle!',
    createdAt: new Date('2018-12-15T16:00:00'),
    author: 'Romanova Julia',
    photoLink: 'img/5.jpg',
    likes: [],
    hashtags: []
  },

  {
    id: '6',
    descriprion: 'Thought aloud, and more precisely on paper',
    createdAt: new Date('2018-11-11T11:30:00'),
    author: 'Romanova Julia',
    photoLink: 'img/6.jpg',
    likes: [],
    hashtags: []
  },

  {
    id: '7',
    descriprion: 'On the roofs of the city you can watch the changing scenery all day long',
    createdAt: new Date('2018-10-25T16:30:00'),
    author: 'Romanova Julia',
    photoLink: 'img/7.jpg',
    likes: [],
    hashtags: ['#BSU', '#FPMI']
  },

  {
    id: '8',
    descriprion: 'Like a light in the shower',
    createdAt: new Date('2018-10-25T12:12:00'),
    author: 'Romanova Julia',
    photoLink: 'img/8.jpg',
    likes: ['Plaschinsky Egor', 'Ostrovskaya Alina'],
    hashtags: []
  },

  {
    id: '9',
    descriprion: 'Dacha, garden, nature and the best berries for me',
    createdAt: new Date('2018-09-21T16:30:00'),
    author: 'Romanova Julia',
    photoLink: 'img/9.jpg',
    likes: [],
    hashtags: []
  },

  {
    id: '10',
    descriprion: 'Soulful day cold evening!',
    createdAt: new Date('2018-09-11T11:30:00'),
    author: 'Romanova Julia',
    photoLink: 'img/10.jpg',
    likes: ['Ostrovskaya Alina'],
    hashtags: []
  },

  {
    id: '11',
    descriprion: 'Good memory! I graduated from music school . Music is what I like !',
    createdAt: new Date('2019-02-21T16:30:00'),
    author: 'Romanova Julia',
    photoLink: 'img/nature.jpg',
    likes: [],
    hashtags: []
  },

  {
    id: '12',
    descriprion: 'Nature is beautiful!',
    createdAt: new Date('2019-02-11T12:12:00'),
    author: 'Miriniv Misha',
    photoLink: 'img/2.jpg',
    likes: [],
    hashtags: []
  },

  {
    id: '13',
    descriprion: ' Gorgeous sunsets, beautiful countryside, the best people-that is what is sometimes missing...',
    createdAt: new Date('2019-01-10T17:30:00'),
    author: 'Alena Holubeva',
    photoLink: 'img/3.jpg',
    likes: [],
    hashtags: []
  },

  {
    id: '14',
    descriprion: 'Photos are different ...',
    createdAt: new Date('2018-12-15T16:30:00'),
    author: 'Elizaveta Novichenko',
    photoLink: 'img/4.jpg',
    likes: [],
    hashtags: []
  },

  {
    id: '15',
    descriprion: 'Sometimes you just need to get to an unfamiliar city and look at everything from a different angle!',
    createdAt: new Date('2018-12-15T16:00:00'),
    author: 'Romanova Julia',
    photoLink: 'img/5.jpg',
    likes: [],
    hashtags: []
  },

  {
    id: '16',
    descriprion: 'Thought aloud, and more precisely on paper',
    createdAt: new Date('2018-11-11T11:30:00'),
    author: 'Romanova Julia',
    photoLink: 'img/6.jpg',
    likes: [],
    hashtags: []
  },

  {
    id: '17',
    descriprion: 'On the roofs of the city you can watch the changing scenery all day long',
    createdAt: new Date('2018-10-25T16:30:00'),
    author: 'Romanova Julia',
    photoLink: 'img/7.jpg',
    likes: [],
    hashtags: []
  },

  {
    id: '18',
    descriprion: 'Like a light in the shower',
    createdAt: new Date('2018-10-25T12:12:00'),
    author: 'Romanova Julia',
    photoLink: 'img/8.jpg',
    likes: [],
    hashtags: []
  },

  {
    id: '19',
    descriprion: 'Dacha, garden, nature and the best berries for me',
    createdAt: new Date('2018-09-21T16:30:00'),
    author: 'Romanova Julia',
    photoLink: 'img/9.jpg',
    likes: [],
    hashtags: []
  },

  {
    id: '20',
    descriprion: 'Soulful day cold evening!',
    createdAt: new Date('2018-09-11T11:30:00'),
    author: 'Romanova Julia',
    photoLink: 'img/10.jpg',
    likes: [],
    hashtags: []
  }

];
let Posts = new PostModel(photoPosts);
Posts.writePosts();

// let getPost = Posts.getPhotoPost('5');
// console.log ("getPost 5 ");
// console.log (getPost);

// Posts.editPhotoPost('1', { hashtags: ['#one', '#two'] });
// console.log("Edit PhotoPost with id = 1: ");
// Posts.writePosts();

// console.log('Remove PhotoPost with id = 2 : '+ Posts.removePhotoPost('2'));
// Posts.writePosts();

// console.log('Remove PhotoPost with id = 111 : '+ Posts.removePhotoPost('111'));

// let Post2 = [
//   {
//     id: '3',
//     descriprion: 'Soulful day cold evening!',
//     createdAt: new Date('2018-09-11T11:30:00'),
//     author: 'Romanova Julia',
//     photoLink: 'img/10.jpg',
//     likes: [],
//     hashtags: []
//   }, 

//   {
//     id: '111',
//     descriprion: 'Soulful day cold evening!',
//     createdAt: new Date('2018-09-12T11:30:00'),
//     author: 'Romanova Julia',
//     photoLink: 'img/10.jpg',
//     likes: [],
//     hashtags: []
//   }
// ];
// let notValid = Posts.addAll(Post2);

// console.log ("AddAll, Notvalidate element: ");
// notValid.forEach(elem =>
//   {
//     console.log(elem);
//   });

//   console.log ("AddAll, Change Posts ");
//   Posts.writePosts()

  let Post1 = 
    {
      id: '21',
      descriprion: 'Soulful day cold evening!',
      createdAt: new Date('2018-09-11T11:30:00'),
      author: 'Romanova Julia',
      photoLink: 'img/10.jpg',
      likes: [],
      hashtags: []
    }; 

//     Posts.addPhotoPost(Post1);
//     console.log ("addPhotoPost Post1 with id = 21");
//     Posts.writePosts();

//     console.log ("add Post with id = 7 " + Posts.addPhotoPost(Posts.getPhotoPost('7')));

//   Posts.getPhotoPosts(15, 10);

//    console.log('filter -> hashtags: ["#BSU", "#FPMI"]');
//    Posts.getPhotoPosts(0, 10, { hashtags: ['#BSU', '#FPMI'] });

//    console.log('filter -> hashtags: ["#BSU", "#FPMI"], author: "Alena Holubeva"');
//    Posts.getPhotoPosts(0, 10, { hashtags: ['#BSU', '#FPMI'], author: 'Alena Holubeva' });

//    console.log('filter -> hashtags: ["#BSU"], author: "Romanova Julia"');
//    Posts.getPhotoPosts(0, 10, { hashtags: ['#BSU'], author: 'Romanova Julia' });

//    console.log('filter -> createdAt:  "2019-02-21"');
//    Posts.getPhotoPosts(0,10, {createdAt : '2019-02-21'} );

  class View
  {
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
    addViewPost (post, posts)
    {
      let photo = document.createElement('div');
      photo.classList.add('photoPosts');
      photo._id = post._id;
      photo.innerHTML = `
      <div class="userphotopost">
            <img src=${post._photoLink}  alt = 'Invalid photo'>
            <h2>${post._author}<br>
                <i class="date">${View._transformationDate(post._createdAt)}</i>
            </h2>
            <h3 class = "decription">
                <button style = "position: relative ; background: hsla(309, 33%, 73%, 0.7) ; bottom: 4px; height:28px; width: 28px; margin-left: 79%">
                        <tr>
                                <td>
                                    <img src="img/like.png" >
                                </td>
                            </tr>
                    <button style = " position:absolute ; background: hsla(309, 33%, 73%, 0.7) ; height: 28px; width: 28px; " >
                        <tr>
                            <td>
                                    <img src="img/kar.png" >
                                
                            </td>
                        </tr>
                        <button style = "position: absolute; background: hsla(309, 33%, 73%, 0.7) ; width: 28px; height:  28px; margin-left : 6%" >
                                <tr>
                                    <td>
                                            <img src="img/ftcheckmark.png" >
                                    </td>
                                </tr>
                            </button> 
                    </button> 
                </button>
              
             </h3>
            <h3 class = "decription1">
                ${post._descriprion}
                <div class = "decription2">
                     ${post._hashtags}
                </div>
            </h3>
      </div>`;
      
      posts.appendChild(photo);
      
    }

    showPost (post)
    {
      let photos = document.getElementById('photoPosts');
      this.addViewPost(post, photos);
    }
    
  }
  let ViewPhoto = new View ();
  ViewPhoto.showPost( Posts.getPhotoPost('5'));

  