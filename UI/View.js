class View
{

  _addViewPost (post, posts)
  {
    let photo = document.createElement('div');
    photo.classList.add('photoPosts');
    photo._id = post._id;
    photo.innerHTML = `
    <div class="userphotopost" id =${post._id}>
          <img src=${post._photoLink}  alt = 'Invalid photo'>
          <h2 >${post._author}<br>
              <i class="date">${(post._createdAt)}</i>
          </h2>
          <div class = "buttonPosts" style = "display: flex">
              <button class = "post-button">   
                  <img src="img/like.png" alt = 'like'>
              </button>
              <button class = "post-button" >
                  <img src="img/kar.png" alt = 'edit'>
              </button>
              <button class = "post-button" >
                  <img src="img/ftcheckmark.png" alt = 'delete'>
              </button>
            
           </div>
          <div class = "description">
              <span>${post._descriprion}</span>
              <div class = "tags">
                   ${post._hashtags.join(',')}
              </div>
          </div>
    </div>`;

    posts.appendChild(photo);
  }

  _showPost (post)
  {
    let photos = document.getElementById('photoPosts');
    this._addViewPost(post, photos);
  }
  showPosts (posts)
  {
    let photos = document.getElementById('photoPosts');
    console.log("Output \n");
    posts.forEach((v1) => {
       
      console.log(v1);
        this._addViewPost(v1, photos);
       
      });
   
  }

  clearPosts ()
  {
    let posts = document.getElementById("photoPosts");
    posts.innerHTML = ``;
    //posts.parentNode.removeChild(posts);

  }
  _removePost(id = 0) 
  {
    let post = document.getElementById(id);
    post.remove();
  }

  _editPost(id,  newPost)
  {
    let oldPost = document.getElementById(id);
    oldPost.firstElementChild.setAttribute('src', newPost._photoLink);
    oldPost.querySelector('.description span').textContent = newPost._descriprion;
    oldPost.querySelector('.description .tags').textContent = newPost._hashtags.join(','); 
  }

  _activeUserHeader(user)
  {
    let headerActive = document.getElementById('titel');
    headerActive.innerHTML =`
    <span class = "merch"> Insta <img src="img/leaves.jpg"class = "merch" alt = "merch"> Life    
      <button class = " btnLogOut"> Log out </button>
      <button class="btnAddPost">
        <img src="img/photopost1.jpg" class="photo1" alt = "photoPost">
      </button>
    </span>
    <div class="username">${user.getUserName()}</div>`;
  }

  _noActiveUserHeader (user)
  {
    let headerNoActive = document.getElementById('titel');
    headerNoActive.innerHTML =`
    <h1> Insta <img src="img/leaves.jpg" class = "merch" alt = "Merch"> Life    
      <button class = " btnLogOut"> Sign in </button>
      <button class="btnAddPost"> Log in </button>
    </h1>
    <div class="username">${user._name}</div>`;
  }
}
