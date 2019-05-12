+function () {

    let Posts = new PostModel();

    let user;
    let ViewPhoto = new View();

    let skip1 = 0;
    let top1 = 0;

    let saveId =0;

    function login(event) {
        if (event.target.id === "log-in") {
            const log = document.getElementById('login');
            ViewPhoto.login();
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
                ViewPhoto.error();
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
            if (top1 + 1 <= 10) {
                ViewPhoto._showPost(Posts.getPhotoPost(post.id));
                top1++;
            }
            document.getElementById('btn-add').close();
            return true;
        }
    }

    function downLoadMore(event) {
        if (event.target.id === "down-more") {
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

    function doLike(IdPost) {
        let flag = Posts.addLikeToPost(IdPost, user);
        console.log(Posts.getPhotoPost(IdPost));
        ViewPhoto.doLike(IdPost, flag);
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
        
    }

    function doDel(id) {
        if (!Posts.removePhotoPost(id)) {
            return false;
        }
        skip1 -= 1;
        top1 -= 1;
        ViewPhoto._removePost(id);
        return true;
    }

    function eventPost() {
        const postsContaier = document.querySelector('main');
        postsContaier.addEventListener('click', (event) => {
            const target = event.target.closest('[data-action]');
            console.log("Target " + target);
            if (event.target.id == 'like' || event.target.id == 'edit' || event.target.id == 'delete'
            || event.target.id =='btn-edit') {
                let post;
                let postId;
                if (event.target.id !='btn-edit')
                {
                    console.log(event.target.id);
                    post = target.closest('.userphotopost');
                    postId = post.id;
                }
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
                    case 'btn-edit': 
                        saveEdit(saveId);
                        prevent = true;
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

}();