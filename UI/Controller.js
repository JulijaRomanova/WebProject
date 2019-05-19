+function () {

    let Posts = new PostModel();
    Posts.restore();

    let user = new User(localStorage.getItem(`user`));
    let ViewPhoto = new View();
    ViewPhoto.showPosts(Posts.getDownMore(0,10));
    ViewPhoto.setAuthorized(user);

    let skip = 0;
    let top = 10;
    let saveId = 0;
    if (Posts.getLenghtPosts()<10) {
        top = Posts.getLenghtPosts();
    }

    function login(event) {
        if (event.target.id === "log-in") {
            const log = document.getElementById('login');
            log.showModal();
        }
    }
    function saveLogin(event) {
        if (event.keyCode == 13) {

            let logUser = document.getElementById("user-login").value;
            let userPassword = document.getElementById("user-password").value;
            if (logUser != '' && userPassword != '') {
                localStorage.setItem(`user`, logUser);
                user = new User(logUser);
                ViewPhoto.setAuthorized(user);
                console.log(logUser + " " + userPassword);
                document.getElementById('login').close();
            }
            else {
                document.getElementById('login').close();
                const err = document.getElementById('error');
                err.showModal();
            }
        }
    }
    function logOut(event) {
        if (event.target.id == "log-out") {
            user = new User('');
            localStorage.setItem(`user`, '');
            ViewPhoto.setAuthorized(user);
        }
    }
    
    function addPost(event) {
        if (event.target.id === "add-post") {
            const post = document.getElementById('btn-add');
            ViewPhoto.pageAddPost(user);
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
            if (top + 1 <= 10) {
                ViewPhoto._showPost(Posts.getPhotoPost(post.id));
                top++;
            }
            document.getElementById('btn-add').close();
            Posts.save();
            document.getElementById("photo").value = "";
            document.getElementById("decr").value = "";
            document.getElementById("hash").value ="";
            return true;
        }
    }

    function downLoadMore(event) {
        if (event.target.id === "down-more") {
            skip = top;
            let lenPosts = Posts.getLenghtPosts() - skip;
            top += 10;
            if (lenPosts < 10) {
                top -= 10;
                top += lenPosts;
            }

            let morePosts = Posts.getDownMore(skip, top);
            if (morePosts.length != 0) {
                ViewPhoto.showPosts(Posts.getDownMore(skip, top));
            }
        }
    }

    function doLike(IdPost) {
        let flag = Posts.addLikeToPost(IdPost, user);
        
        ViewPhoto.doLike(IdPost, flag);
        Posts.save();
    }

    function editPosts(id) {
        let oldPost = Posts.getPhotoPost(id);
        const editPost = document.getElementById('dia-edit');
        ViewPhoto.pageEditPost(oldPost, user);

        if (editPost.open != true)
            editPost.showModal();
    }

    function saveEdit (id)
    {
        let newPost =
        {
            descriprion: '',
            photoLink: '',
            hashtags: []
        }
        newPost.photoLink = document.getElementById('new-photo').value;
        newPost.descriprion = document.getElementById('new-decr').value;
        newPost.hashtags = document.getElementById('new-hash').value.split(',');

        if (!Posts.editPhotoPost(id, newPost)) {
            return false;
        }
        ViewPhoto._editPost(id, Posts.getPhotoPost(id));
        document.getElementById('dia-edit').close();
        Posts.save();
        
    }

    function doDel(id) {
          
        if (!Posts.removePhotoPost(id)) {
            return false;
        }
        skip -= 1;
        top -= 1;
        ViewPhoto._removePost(id);
      
        Posts.save();
        return true;
    }


    function eventPost() {
        const postsContaier = document.querySelector('main');
        postsContaier.addEventListener('click', (event) => {
            const target = event.target.closest('[data-action]');
            if (event.target.id == 'like' || event.target.id == 'edit' || event.target.id == 'delete') {
                let post;
                let postId;
                post = target.closest('.userphotopost');
                postId = post.id;
                let prevent = false;
                switch (target.dataset.action) {
                    case 'like':
                        doLike(postId);
                        prevent = true;
                        break;
                    case 'edit':
                        editPosts(postId);
                        prevent = true;
                        saveId = postId;
                        break;
                    case 'del':
                        doDel(postId);
                        prevent = true;
                        break;
                }
                if (prevent) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
        });

    }

    function dialog_edit(event){
        if (event.target.id =='btn-edit') {
        saveEdit(saveId);
        event.preventDefault();
        event.stopPropagation();
        }
    }


    function showVariantsHashTags(event) {
        if (event.target.id === 'Hashtags') {
            let hashtags = document.getElementById("childTags");
            let allTags = Posts.getHashTags();
            hashtags.innerHTML = `<p>${allTags.join(';  ')}</p>`;
            hashtags.style.display = (hashtags.style.display === 'none') ? 'block' : 'none';
        }
    }

    function showVariantsAuthors(event) {
        if (event.target.id === 'user') {
            let authors = document.getElementById("childUsers");
            let allAuthor = Posts.getAuthor();
            authors.innerHTML = `<p>${allAuthor}</p>`;
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

            if (hash != "")
                filterConfig.hashtags.push(document.getElementById('Hashtags').value);

            console.log(filterConfig.author + " " + filterConfig.createdAt + " " + filterConfig.hashtags);
            ViewPhoto.clearPosts();
            if (Posts.getPhotoPosts(0, 10, filterConfig).length != 0)
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
    document.body.addEventListener('click', eventPost);
    document.body.addEventListener('click', dialog_edit);
    

}();