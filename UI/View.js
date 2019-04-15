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
          <div class = "decription" style = "display: flex">
              <button class = "post-button">   
                  <img src="img/like.png" >
              </button>
              <button class = "post-button" >
                  <img src="img/kar.png" >
              </button>
              <button class = "post-button" >
                  <img src="img/ftcheckmark.png" >
              </button>
            
           </div>
          <h3 class = "decription1">
              <span>${post._descriprion}</span>
              <div class = "decription2">
                   ${post._hashtags.join(',')}
              </div>
          </h3>
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
    posts.parentNode.removeChild(posts);

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
    oldPost.querySelector('.decription1 span').textContent = newPost._descriprion;
    oldPost.querySelector('.decription1 .decription2').textContent = newPost._hashtags.join(','); 
  }

  _activeUser(user)
  {
    let headerActive = document.getElementById('titel');
    headerActive.innerHTML =`
    <h1> Insta <img src="img/leaves.jpg" width="50" height="40""> Life    
      <button class = " butt1"> Log out </button>
      <button class="butt2">
        <img src="img/photopost1.jpg" class="photo1">
      </button>
    </h1>
    <div class="username">${user.getUserName()}</div>`;
  }

  _noActiveUser (user)
  {
    let headerNoActive = document.getElementById('titel');
    headerNoActive.innerHTML =`
    <h1> Insta <img src="img/leaves.jpg" width="50" height="40""> Life    
      <button class = " butt1"> Sign in </button>
      <button class="butt2"> Log in </button>
    </h1>
    <div class="username">${user._name}</div>`;
  }

  static _showAllAuthors(allUsers)
  {
    let lebel1 = document.getElementById('user');
    let allUs = document.getElementById("childUsers");
    function lebel1Click()
    {
      allUs.style.display = (allUs.style.display == 'none')? 'block': 'none';

    }
    lebel1.addEventListener('click', lebel1Click);
    allUs.innerHTML =`<p>${allUsers.join(';  ')}</p>
    `;
  }

  static _showAllDates(allDates)
  {
    let lebel2 = document.getElementById('date');
    let allD = document.getElementById("childDates");
    function lebel2Click()
    {
      allD.style.display = (allD.style.display == 'none')? 'block': 'none';

    }
    lebel2.addEventListener('click', lebel2Click);
    allD.innerHTML =`<p>${allDates.join(';  ')}</p>
    `;
  }

  filterUser(allUsers, allDates, allTags)
  {
    View._showAllAuthors(allUsers);
    View._showAllDates(allDates);
    View._showAllTags(allTags);
    
  
  }

  
}
