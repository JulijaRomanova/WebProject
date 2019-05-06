+function () {

    let Posts = new PostModel();

    let user ;
    let ViewPhoto = new View();
    

    let skip1 = 0;
    let top1 = 0;
  

   

    function login(event) {
        if (event.target.id === "log-in") {
            const log = document.getElementById('login');
            log.innerHTML = `
        <label >
            <div  class = "font"> Login </div>
            <input type="text" id ="user-login" class = "inputs" placeholder = "Input login" autocomplete="off" />
        </label>
                
        <label>
            <div class="font">Password</div>
            <input type="text" id="user-password" class = "inputs" placeholder = "Input Password" autocomplete="off"/>
        </label>
        `;
            log.showModal();
        }
    }
    function saveLogin(event) {
        if (event.keyCode == 13) {
            let logUser = document.getElementById("user-login").value;
            let userPassword = document.getElementById("user-password").value;
            if (logUser != '' && userPassword != '') {
                user = new User(logUser);
                ViewPhoto.setAuthorized(user);
                console.log(logUser + " " + userPassword);
                document.getElementById('login').close();

            }
            else {
                document.getElementById('login').close();
                const err = document.getElementById('error');
                err.innerHTML = `
                <div class = "font error">
                 <img  src="img/err.jpg" class = "error" alt = 'Invalid photo'>
                </div>
                <h3 class = "font error">Input Error</h3>
                <h3 class = "font error">Please, try again...</h3> 
                <div class = "error">
                    <a href="file:///D:/ПРОГА/Practice/WebProject/UI/index.html?" >Insta_Life</a> 
                </div>
                `;
                err.showModal();
            }
        }
    }
    function logOut(event) {
        if (event.target.id == "log-out") {
            user = new User('');
            ViewPhoto.setAuthorized(user);
        }
    }
    function addPost(event) {
        if (event.target.id === "add-post") {
            const post = document.getElementById('btn-add');
            post.innerHTML = `
            <div class = "font">Your photoPost</div>
            <label >
                <div  class = "font"> Photo </div>
                <input type="text" id ="photo" class = "inputs" placeholder = "Input img/_.jpg" autocomplete="off" />
            </label>
            <label >
                <div  class = "font"> Description </div>
                <input type="text" id ="decr" class = "inputs" placeholder = "Input decription" autocomplete="off" />
            </label>
            <label >
                <div  class = "font"> HashTags </div>
                <input type="text" id ="hash" class = "inputs" placeholder = "Input hashTags" autocomplete="off" />
            </label>
            <div class = "font">Username:  ${user.getUserName()}</div>
            <button class="btn btn-add-post" id = "btn-add">
                    add post
            </button>
            `;
            post.showModal();
        }
    }

    function savePost(event) {
        if (event.target.id === "btn-add") {
            let post = {
                id: '',
                descriprion: '',
                createdAt: new Date(),
                author: '',
                photoLink: '',
                likes: [],
                hashtags: []
            }
            post.author = user.getUserName();
            post.photoLink = document.getElementById("photo").value;
            post.descriprion = document.getElementById("decr").value;
            post.createdAt = new Date();
            post.likes = [];
            post.hashtags = [];
            let tags = document.getElementById("hash").value;
            post.hashtags = tags.split(' ');
            if (!Posts.addPhotoPost(post)) {
                document.getElementById('add-photoPost').close();
                return false;
            }
            if (top1 + 1 <= 10) {
                ViewPhoto._showPost(Posts.getPhotoPost(post.id));
                top1++;
            }
            document.getElementById('btn-add').close();
            return true;
        }
    }

    function downLoadMore(event) {
        if (event.target.id ==="down-more")
        {
            skip1 = top1;
            let lenPosts = Posts.getLenghtPosts() - skip1;
            top1 += 10;
            if (lenPosts < 10) {
                top1 -= 10;
                top1 += lenPosts;
            }
        
            let morePosts = Posts.getDownMore(skip1, top1);
            if (morePosts.length != 0) {
                ViewPhoto.showPosts(Posts.getDownMore(skip1, top1));
            }
        }
    }
    /*
    function doLike (IdPost, casePost){
        let post = Posts.getPhotoPost(IdPost);
        post._likes.push(user.getUserName());
        console.log(user.getUserName());
        const postEl = document.createElement('bottom');
        postEl.id = casePost;
        postEl.innerHTML = `
        <img src="img/like.png" alt = 'like' background =  hsla(0, 92%, 51%, 0.7)>
        `;

    }
    function eventPost ()
    {
        const postsContaier = document.querySelector('main');
        postsContaier.addEventListener('click', (event) => {
        const target = event.target.closest('[data-action]');
        const post = target.closest('.userphotopost');
        const postId = post.id;
        let prevent = false;
        switch (target.dataset.action) {
        case 'like':
            doLike(postId, 'like' );
            prevent = true;
            break;
        //case 'edit':
        //     doEdit(postId);
        //     prevent = true;
        //     break;
        // case 'del':
        //     doDel(postId);
        //     prevent = true;
        //     break;
        }
        
        if (prevent) {
        event.preventDefault();
        event.stopPropagation();
        }
    });
  
    }
    */

   function showVariantsHashTags(event) {
    if (event.target.id === 'Hashtags') {
      let hashtags = document.getElementById("childTags");
      let allTags = Posts.getHashTags();
      hashtags.innerHTML = `<p>${allTags.join(';  ')}</p>
    `;
      hashtags.style.display = (hashtags.style.display === 'none') ? 'block' : 'none';
    }
  }

  function showVariantsAuthors(event) {
    if (event.target.id === 'user') {
      let authors = document.getElementById("childUsers");
      let allAuthor = Posts.getAuthor();
      authors.innerHTML = `<p>${allAuthor}</p>
    `;
      authors.style.display = (authors.style.display === 'none') ? 'block' : 'none';
    }
  }

  function showVariantsDates(event) {
    if (event.target.id === 'date') {
      let dates = document.getElementById("childDates");
      let allDates = Posts.getDates();
      dates.innerHTML = `<p>${allDates.join('; ')}</p>
    `;
      dates.style.display = (dates.style.display === 'none') ? 'block' : 'none';
    }
  }

  function filterClickEvent(event) {
    if (event.target.id === "filter") {
        event.preventDefault();
        let filterConfig =
        {
          hashtags: [],
          createdAt: new Date(''),
          author: '',
        }
      console.log("here!");
      filterConfig.author = document.getElementById('user').value;
      filterConfig.createdAt = new Date(document.getElementById('date').value);
      let hash = document.getElementById('Hashtags').value;
      
      if (hash!="")
      filterConfig.hashtags.push(document.getElementById('Hashtags').value);

      console.log(filterConfig.author + " " + filterConfig.createdAt + " " + filterConfig.hashtags);
      ViewPhoto.clearPosts();
      if (Posts.getPhotoPosts(0, 10, filterConfig).length!=0)
      ViewPhoto.showPosts(Posts.getPhotoPosts(0, 10, filterConfig));

      document.getElementById('user').value = "";
      document.getElementById('date').value = "";
      document.getElementById('Hashtags').value = "";
    }
  }

    document.body.addEventListener('click', login);
    document.body.addEventListener('keydown', saveLogin);
    document.body.addEventListener('click', logOut);
    document.body.addEventListener('click', addPost);
    document.body.addEventListener('click', savePost);
    document.body.addEventListener('click', downLoadMore);
    document.body.addEventListener('click', showVariantsHashTags);
    document.body.addEventListener('click', showVariantsAuthors);
    document.body.addEventListener('click', showVariantsDates);
    document.body.addEventListener('click', filterClickEvent);
    //document.body.addEventListener('click', eventPost);
}();