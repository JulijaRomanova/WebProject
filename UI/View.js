class View {

  _addViewPost(post, posts) {
    const postEl = document.createElement('div');
    postEl.id = post._id;
    postEl.className = 'userphotopost';
    postEl.innerHTML = `
    
          <img src=${post._photoLink}  alt = 'Invalid photo'>
          <h2 >${post._author}<br>
              <i class="date">${(post._createdAt)}</i>
          </h2>
          <div class = "test">
            <div class = "buttonPosts">
                <button class = "post-button" id = "like" data-action="like">   
                    <img src="img/like.png" id = "like" alt = 'like' style="background: hsla(307, 29%, 56%, 0.7)">
                </button>
                <button class = "post-button" id= "edit" data-action="edit">
                    <img src="img/kar.png" id = "edit" alt = 'edit'>
                </button>
                <button class = "post-button" id = "delete" data-action="del">
                    <img src="img/ftcheckmark.png" id = "delete" alt = 'delete'>
                </button>
            </div>
            <div class = "description">
                <span>${post._descriprion}</span>
                <div class = "tags">
                    ${post._hashtags.join(',')}
                </div>
            </div>
          </div>
    `;
    posts.appendChild(postEl);
  }

  _showPost(post) {
    let photos = document.getElementById('photoPosts');
    this._addViewPost(post, photos);
  }
  showPosts(posts) {
    let photos = document.getElementById('photoPosts');
    console.log("Output \n");
    posts.forEach((v1) => {
      console.log(v1);
      this._addViewPost(v1, photos);
    });

  }

  clearPosts() {
    let posts = document.getElementById("photoPosts");
    posts.innerHTML = ``;
    
  }
  _removePost(id = 0) {
    let post = document.getElementById(id);
    if (post) {
      post.remove();
    }
  }

  _editPost(id, newPost) {
    let oldPost = document.getElementById(id);
    if (oldPost) {
      oldPost.firstElementChild.setAttribute('src', newPost._photoLink);
      oldPost.querySelector('.description span').textContent = newPost._descriprion;
      oldPost.querySelector('.description .tags').textContent = newPost._hashtags.join(',');
    }
  }

  doLike(id, flag){

    let post = document.getElementById(id);
    let like = post.querySelector('#like'); 
    like.firstElementChild.setAttribute('src','img/like.png');
    like.style.background = "hsla(307, 29%, 56%, 0.7)";
    if(flag){      
      let like = post.querySelector('#like');
      like.firstElementChild.setAttribute('src','img/like_red.png');
      like.firstElementChild.style.background = "hsla(307, 29%, 56%, 0.7)";
    }
    
  }

  setAuthorized(user) {
    let headerAct = document.getElementById('username');
    let userName = user && user.getUserName();
    headerAct.textContent = userName || 'Anonim';
    document.body.classList.toggle('is-auth', user.isUserName());
  }


  pageAddPost(user){
    const post = document.getElementById('user_name_post');
    post.innerHTML = `
    <p>Username:  ${user.getUserName()}</p>
    `;
  }

  pageEditPost( oldPost, user){
    const editPost = document.getElementById('dia-edit');
    editPost.innerHTML = `
    <div class = "font">Edit photoPost</div>
    <label >
        <div  class = "font"> New Photo </div>
        <input type="text" id ="new-photo" class = "inputs" value = ${oldPost._photoLink} >
    </label>
    <label >
        <div  class = "font"> New Description </div>
        <input type="text" id ="new-decr" class = "inputs" value = "${oldPost._descriprion}" >
    </label>
    <label >
        <div  class = "font"> New HashTags </div>
        <input type="text" id ="new-hash" class = "inputs" value = ${oldPost._hashtags.join(',')} >
    </label>
    <div class = "font">Username:  ${user.getUserName()}</div>
    <button class="btn btn-add-post" id = "btn-edit" data-action=  "btn-edit">
            edit post
    </button>
    `;
  }
}
