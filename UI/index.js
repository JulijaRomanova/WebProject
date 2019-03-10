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
      hashtags : ['#BSU', '#FPMI', '#like']
      
     },
  
     {
       id: '2',
       descriprion: 'Nature is beautiful!',
       createdAt: new Date('2019-02-11T12:12:00'),
       author: 'Miriniv Misha',
       photoLink: 'img/2.jpg',
       likes: [],
       hashtags : ['#BSU', '#FPMI']
     },

     {
        id: '3',
        descriprion: ' Gorgeous sunsets, beautiful countryside, the best people-that is what is sometimes missing...',
        createdAt: new Date('2019-01-10T17:30:00'),
        author: 'Alena Holubeva',
        photoLink: 'img/3.jpg',
        likes: ['Plaschinsky Ekler', 'Kitaev Ivan'],
        hashtags : ['#BSU', '#FPMI', '#2123']
      },

      {
        id: '4',
        descriprion: 'Photos are different ...',
        createdAt: new Date('2018-12-15T16:30:00'),
        author: 'Elizaveta Novichenko',
        photoLink: 'img/4.jpg',
        likes: [],
        hashtags :[]
      },

      {
        id: '5',
        descriprion: 'Sometimes you just need to get to an unfamiliar city and look at everything from a different angle!',
        createdAt: new Date('2018-12-15T16:00:00'),
        author: 'Romanova Julia',
        photoLink: 'img/5.jpg',
        likes: [],
        hashtags :[]
      },

      {
        id: '6',
        descriprion: 'Thought aloud, and more precisely on paper',
        createdAt: new Date('2018-11-11T11:30:00'),
        author: 'Romanova Julia',
        photoLink: 'img/6.jpg',
        likes: [],
        hashtags :[]
      },

      {
        id: '7',
        descriprion: 'On the roofs of the city you can watch the changing scenery all day long',
        createdAt: new Date('2018-10-25T16:30:00'),
        author: 'Romanova Julia',
        photoLink: 'img/7.jpg',
        likes: [],
        hashtags : ['#BSU', '#FPMI']
      },

      {
        id: '8',
        descriprion: 'Like a light in the shower',
        createdAt: new Date('2018-10-25T12:12:00'),
        author: 'Romanova Julia',
        photoLink: 'img/8.jpg',
        likes: ['Plaschinsky Egor', 'Ostrovskaya Alina'],
        hashtags :[]
      },

      {
        id: '9',
        descriprion: 'Dacha, garden, nature and the best berries for me',
        createdAt: new Date('2018-09-21T16:30:00'),
        author: 'Romanova Julia',
        photoLink: 'img/9.jpg',
        likes: [],
        hashtags :[]
      },

      {
        id: '10',
        descriprion: 'Soulful day cold evening!',
        createdAt: new Date('2018-09-11T11:30:00'),
        author: 'Romanova Julia',
        photoLink: 'img/10.jpg',
        likes: ['Ostrovskaya Alina'],
        hashtags :[]
      },

      {
      id: '11',
      descriprion: 'Good memory! I graduated from music school . Music is what I like !',
      createdAt: new Date('2019-02-21T16:30:00'),
      author: 'Romanova Julia',
      photoLink: 'img/nature.jpg',
      likes: [],
      hashtags :[]
     },
  
     {
       id: '12',
       descriprion: 'Nature is beautiful!',
       createdAt: new Date('2019-02-11T12:12:00'),
       author: 'Miriniv Misha',
       photoLink: 'img/2.jpg',
       likes: [],
       hashtags :[]
     },

     {
        id: '13',
        descriprion: ' Gorgeous sunsets, beautiful countryside, the best people-that is what is sometimes missing...',
        createdAt: new Date('2019-01-10T17:30:00'),
        author: 'Alena Holubeva',
        photoLink: 'img/3.jpg',
        likes: [],
        hashtags :[]
      },

      {
        id: '14',
        descriprion: 'Photos are different ...',
        createdAt: new Date('2018-12-15T16:30:00'),
        author: 'Elizaveta Novichenko',
        photoLink: 'img/4.jpg',
        likes: [],
        hashtags :[]
      },

      {
        id: '15',
        descriprion: 'Sometimes you just need to get to an unfamiliar city and look at everything from a different angle!',
        createdAt: new Date('2018-12-15T16:00:00'),
        author: 'Romanova Julia',
        photoLink: 'img/5.jpg',
        likes: [],
        hashtags :[]
      },

      {
        id: '16',
        descriprion: 'Thought aloud, and more precisely on paper',
        createdAt: new Date('2018-11-11T11:30:00'),
        author: 'Romanova Julia',
        photoLink: 'img/6.jpg',
        likes: [],
        hashtags :[]
      },

      {
        id: '17',
        descriprion: 'On the roofs of the city you can watch the changing scenery all day long',
        createdAt: new Date('2018-10-25T16:30:00'),
        author: 'Romanova Julia',
        photoLink: 'img/7.jpg',
        likes: [],
        hashtags :[]
      },

      {
        id: '18',
        descriprion: 'Like a light in the shower',
        createdAt: new Date('2018-10-25T12:12:00'),
        author: 'Romanova Julia',
        photoLink: 'img/8.jpg',
        likes: [],
        hashtags :[]
      },

      {
        id: '19',
        descriprion: 'Dacha, garden, nature and the best berries for me',
        createdAt: new Date('2018-09-21T16:30:00'),
        author: 'Romanova Julia',
        photoLink: 'img/9.jpg',
        likes: [],
        hashtags :[]
      },

      {
        id: '20',
        descriprion: 'Soulful day cold evening!',
        createdAt: new Date('2018-09-11T11:30:00'),
        author: 'Romanova Julia',
        photoLink: 'img/10.jpg',
        likes: [],
        hashtags :[]
      }
  
  ];

   photoPosts.map((v1)=> {
    console.log(v1)
  });


  function getPhotoPost(getid)
  {
    for (var i=0, len=photoPosts.length; i<len; i++) {
        if ( photoPosts[i].id == getid ) {
            return photoPosts[i]; 
        }
    }
  };

  console.log('Post with id = 2 ');
  console.log(getPhotoPost('2'));


  function validatePhotoPost(photoPost)
  {
      for (var i=0, len=photoPosts.length; i<len; i++) {
        if ( photoPosts[i].id == photoPost.id || photoPost.id ==null || typeof(photoPost.id)!='string') {
            return false; 
        }
        else if (photoPost.descriprion.length>200 || photoPost.descriprion==null || typeof(photoPost.descriprion)!='string')
        {
          return false;
        }
        else if (photoPost.createdAt == null ||! photoPost.createdAt instanceof Date)
        {
          return false;
        }
        else if (photoPost.author == null || typeof(photoPost.descriprion)!='string')
        {
          return false;
        }
        else if (photoPost.photoLink == null || typeof(photoPost.photoLink)!='string')
        {
          return false;
        }
        
        
    }
    return true;
  } ;

  let photoPost = 
    {
      id: '111',
      descriprion: 'Good memory! I graduated from music school . Music is what I like ! qwertyuiop[oiuytrewertyuioiuytrertyuioiuytrtyuiopoiu iuytiok dsfhgsdf sldf lsdufhs dfuhsdlufhlskfhdhflsdhflkdhs sdklfhsdlkfjhdlkfhsd',
      createdAt: new Date('2019-02-21T16:30:00'),
      author: 'Romanova Julia',
      photoLink: 'img/nature.jpg',
      likes: [],
      hashtags: ['#girl', '#cat']
     };

  console.log('Validate PhotoPosts[2] ' + validatePhotoPost(photoPosts[2]));
  console.log('Validate PhotoPost ' + validatePhotoPost(photoPost));
  photoPosts.map((v1)=> {
    console.log(v1)  
  });

  function addPhotoPost(photoPost)
  {
    if (validatePhotoPost(photoPost) == true )
    {
      photoPosts.push(photoPost);
      return true;
    }
    else
    {
      return false;
    }
  }

  console.log('Add PhotoPost ' + addPhotoPost (photoPost));
  photoPosts.map((v1)=> {
    console.log(v1)  
  });


  function editPhotoPost(id, photoPost)
  {
    for (var i=0, len=photoPosts.length; i<len; i++) {
      if (photoPosts[i].id == id)
      {
        if (photoPost.descriprion !=null)
        {
          photoPosts[i].descriprion = photoPost.descriprion;
        }
        if (photoPost.photoLink !=null)
        {
          photoPosts[i].photoLink = photoPost.photoLink;
        }
        if(photoPost.hashtags.length != 0)
        {
          photoPosts[i].hashtags = photoPost.hashtags;
        }
        return true;
      }
    }
    return false;
  }

  console.log("Edit PhotoPost " + editPhotoPost('1',  { hashtags: ['#one', '#two'] }));

  photoPosts.map((v1)=> {
    console.log(v1)  
  });

  function removePhotoPost(id)
  {
    for (var i=0, len=photoPosts.length; i<len; i++) {
      if (photoPosts[i].id == id)
      {
        photoPosts.splice(i, 1);
        return true;
      }
    }
    return false;
  } ;

  console.log('Remove PhotoPost with id = 2 : '+removePhotoPost('2'));

  function contains(where, what){
    for(var i=0; i<what.length; i++){
        if(where.indexOf(what[i]) == -1) return false;
    }
    return true;
};
  
  function getPhotoPosts(skip = 0, top = 10, filterConfig )
  {
    let k = 0;
    let sortPhotoPosts = [];
    if (skip+top > photoPosts.length)
    {
      allLen = photoPosts.length;
    }
    else
    {
      allLen = skip + top;
    }
  
    if (filterConfig)
    {
      
      for (var i=skip; i<allLen; i++) {
        let a;
        let b;
        if (filterConfig.likes)
        {
         b =contains(photoPosts[i].likes, filterConfig.likes);
        }
        else{
          b = true;
        }
        if (filterConfig.hashtags)
        {
          a = contains(photoPosts[i].hashtags, filterConfig.hashtags);
        }
        else
        {
          a = true;
        }
        if(filterConfig.author!= null)
          {
            
            if (photoPosts[i].author == filterConfig.author &&   (a == true) &&  (b == true))
            {
                sortPhotoPosts.push(photoPosts[i]);
            }
          }
          else
            {
              if (( a == true) && (b == true))
              {
                sortPhotoPosts.push(photoPosts[i]);
              }
            } 
      }
    }

    else
    {
      for (var i=skip; i<allLen; i++) {
        sortPhotoPosts.push(photoPosts[i]);
      }
    }
      sortPhotoPosts.sort (function( PhotoPost1, PhotoPost2 ) {return PhotoPost1.createdAt - PhotoPost2.createdAt});

      console.log ('Filter : \n');
      sortPhotoPosts.map((v1)=> {
        console.log(v1)  
      });
      return sortPhotoPosts;
  };

  
  getPhotoPosts(10, 10);

  console.log ('filter -> hashtags: ["#BSU", "#FPMI"]');
  getPhotoPosts(0, 10,  {hashtags: ['#BSU', '#FPMI']});

  console.log ('filter -> hashtags: ["#BSU", "#FPMI"], author: "Alena Holubeva"');
  getPhotoPosts(0, 10,  {hashtags: ['#BSU', '#FPMI'], author: 'Alena Holubeva'});

  console.log ('filter -> likes: ["Ostrovskaya Alina"]');
  getPhotoPosts(0, 10,  {likes: ['Ostrovskaya Alina']});

  return{
    getPhotoPost, validatePhotoPost, addPhotoPost, 
    editPhotoPost, removePhotoPost, getPhotoPosts
  }
}();

