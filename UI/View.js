class View
{

  _addViewPost (post, posts)
  {
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
                <button class = "post-button" data-action="like">   
                    <img src="img/like.png" alt = 'like'>
                </button>
                <button class = "post-button" data-action="edit">
                    <img src="img/kar.png" alt = 'edit'>
                </button>
                <button class = "post-button" data-action="del">
                    <img src="img/ftcheckmark.png" alt = 'delete'>
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
    if(post)
    {
      post.remove();
    }
  }

  _editPost(id,  newPost)
  {
    let oldPost = document.getElementById(id);
    if (oldPost)
    {
      oldPost.firstElementChild.setAttribute('src', newPost._photoLink);
      oldPost.querySelector('.description span').textContent = newPost._descriprion;
      oldPost.querySelector('.description .tags').textContent = newPost._hashtags.join(','); 
    }
  }

  setAuthorized (user) {
    let headerAct = document.getElementById('username');
    headerAct.textContent = user.getUserName() || 'Anonim';
  }
}
