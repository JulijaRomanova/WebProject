(function () {
  function transformPost(post) {
    return {
      _id: post.id,
      _descriprion: post.descriprion,
      _createdAt: PostModel._transformationDate(post.createdAt),
      _author: post.author,
      _photoLink: post.photoLink,
      _likes: post.likes,
      _hashtags: post.hashtags
    };
  }

  class PostModel {

    constructor() {
      this._photoPosts = [];
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

      if (filterPhotoPosts.length != 0)
        filterPhotoPosts.sort(function (PhotoPost1, PhotoPost2) {
          return new Date(PhotoPost2._createdAt)
            - new Date(PhotoPost1._createdAt)
        });

      return filterPhotoPosts;
    }

    getLenghtPosts() {
      return this._photoPosts.length;
    }

    getDownMore(skip, top) {
      return this._photoPosts.slice(skip, top);
    }

    getAuthor() {
      const authorMap = this._photoPosts.reduce((map, item) => {
        map[item._author] = 1;
        return map;
      }, {}
      );
      return Object.keys(authorMap);
    }

    getDates() {

      const datesMap = this._photoPosts.reduce((map, item) => {
        map[item._createdAt] = 1;
        return map;
      }, {}
      );
      return Object.keys(datesMap);
    }

    getHashTags() {
      const tagMap = this._photoPosts.reduce((map, item) => {
        (item._hashtags || []).forEach((hash) => {
          map[hash] = 1;
        });
        return map;
      }, {}
      );
      return Object.keys(tagMap);
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

    static generateId() {
      return 'post-' + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(32);
    }

    addPhotoPost(photoPost) {
      if (this._photoPosts.some(post => photoPost.id === post._id)) {
        return false;
      }
      if (PostModel._validatePhotoPost(photoPost)) {
        photoPost.id = PostModel.generateId();
        this._photoPosts.push(transformPost(photoPost));
        return true;
      }
      return false;
    }

    addAll(posts) {
      let notValidate = [];
      posts.forEach(post => {
        if (!this.addPhotoPost(post)) {
          notValidate.push(post);
        }
      });
      return notValidate;
    }

    addLikeToPost(id, user) {
      let post = this.getPhotoPost(id);
      if (!post) {
        return;
      }
      const index = post._likes.indexOf(user.getUserName());
      if (index === -1) {
        post._likes.push(user.getUserName());
        return true;
      }
      post._likes.splice(post._likes.indexOf(user.getUserName()));
      return false;
    }
    clear() {
      this._photoPosts = [];
    }

    save() {
      try {
        const serializedPosts = JSON.stringify(this._photoPosts);
        localStorage.setItem('myPosts', serializedPosts);
      } catch (e) {
        //
      }
    }

  
    restore() {
      const items = localStorage.getItem('myPosts');
      try {
        this._photoPosts = JSON.parse(items) || [];
      } catch (e) {
        this._photoPosts = [];
      }
    }
  }

  window.PostModel = PostModel;
})();