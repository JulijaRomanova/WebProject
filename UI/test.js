+function()
{
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
      hashtags: ['#like']
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
      author: 'Romanov Andrey',
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
      hashtags: ['#memory']
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
      createdAt: new Date(),
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
  let Post1 = 
  {
    id: '21',
    descriprion: 'New ! Soulful day cold evening!',
    createdAt: new Date(),
    author: 'Romanova Julia',
    photoLink: 'img/10.jpg',
    likes: [],
    hashtags: []
  }; 
  let newPost =
  {
    
    descriprion: 'Good evening!',
    createdAt: new Date('2018-09-11T11:30:00'),
    photoLink: 'img/11.jpg',
    likes: [],
    hashtags: ['#FPM']
  }

  let filterConfig =
  {
    hashtags: ['#like'],
    createdAt: new Date (''),
    author: '',
  }
 
  let skip1 = 0;
  let top1 = 10;
  const Posts = new PostModel(photoPosts);

  let user = new User('Julia Romanova');
  let ViewPhoto = new View ();
  ViewPhoto.setAuthorized(user);

  downLoadMore( ViewPhoto);
  addPost(Post1, ViewPhoto);
  downLoadMore(ViewPhoto);
  removePost(ViewPhoto, '10');
  editPost('3', ViewPhoto, newPost);

  downLoadMore( ViewPhoto);
  filterPosts(ViewPhoto, filterConfig);

  
function addPost(post, viewer) {

	if (!Posts.addPhotoPost(post)) {
		return false;   
    }
    if(Posts.getLenghtPosts() <= 10)
    {
      viewer._showPost(Posts.getPhotoPost(post.id));
    }
	return true;
}
function removePost( viewer, id) {
	if (!Posts.removePhotoPost(id)) {
		return false;
    }
    skip1-=1;
    top1-=1;
    viewer._removePost(id);
	return true;
}
function editPost (id, viewer, newPost)
{
    if(!Posts.editPhotoPost(id, newPost))
    {
        return false;
    }
    viewer._editPost(id, Posts.getPhotoPost(id));
}

function downLoadMore ( viewer)
{
 
  let morePosts = Posts.getDownMore(skip1,top1);
  if(morePosts.length!=0)
  {
    viewer.showPosts(Posts.getDownMore(skip1, top1));
  }
  skip1+=10;
  top1+=10;
}

function filterPosts(viewer, filterConfig)
{
  viewer.clearPosts();
  viewer.showPosts(Posts.getPhotoPosts(0,10, filterConfig));
}

const viewer = new View();

function filterClickEvent(event)
{
  let allPosts = document.getElementById("photoPosts");  
  
  if (event.target.id === "filter")
  {
    console.log("here!");
    filterConfig.author = document.getElementById('user').value;
    filterConfig.createdAt = document.getElementById('date').value;
    filterConfig.hashtags.push(document.getElementById('Hashtags').value); 
    console.log(filterConfig.author + " " + filterConfig.createdAt + " " + filterConfig.hashtags);
    allPosts.style.display = 'none';
    viewer.showPosts(Posts.getPhotoPosts(0,9, filterConfig)); 
  }
} 

function showVariantsHashTags(event) {
  if (event.target.id === 'Hashtags') {
    let hashtags = document.getElementById("childTags");
    let allTags = Posts.getHashTags();
    hashtags.innerHTML =`<p>${allTags.join(';  ')}</p>
    `; 
    hashtags.style.display = (hashtags.style.display === 'none') ? 'block': 'none';
  }
}

function showVariantsAuthors(event) {
  if (event.target.id === 'user') {
    let authors = document.getElementById("childUsers");
    let allAuthor = Posts.getAuthor();
    authors.innerHTML =`<p>${allAuthor}</p>
    `; 
    authors.style.display = (authors.style.display === 'none') ? 'block': 'none';
  }
}

function showVariantsDates(event) {
  if (event.target.id === 'date') {
    let dates = document.getElementById("childDates");
    let allDates = Posts.getDates();
    dates.innerHTML =`<p>${allDates.join('; ')}</p>
    `; 
    dates.style.display = (dates.style.display === 'none') ? 'block': 'none';
  }
}

const head = document.querySelector('main');
head.addEventListener('click', filterClickEvent);
document.body.addEventListener('click', showVariantsHashTags);
document.body.addEventListener('click', showVariantsAuthors);
document.body.addEventListener('click', showVariantsDates);

/*
const postsContaier = document.querySelector('main');
postsContaier.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]');
  const post = target.closest('userphotopost');
  const postId = post.id;
  let prevent = false;
  switch (target.dataset.action) {
    case 'like':
      doLike(postId);
      prevent = true;
      break;
    case 'edit':
      doEdit(postId);
      prevent = true;
      break;
  }
  if (prevent) {
    event.preventDefault();
    event.stopPropagation();
  }
});
*/
}();