+function()
{
let photoPosts = [

    {
      id: '1',
      descriprion: 'Good memory! I graduated from music school . Music is what I like !',
      createdAt: new Date('2019-02-21T16:30:00'),
      author: 'Romanova Julia',
      photoLink: 'img/nature.jpg',
      
     },
  
     {
       id: '2',
       descriprion: 'Nature is beautiful!',
       createdAt: new Date('2019-02-11T12:12:00'),
       author: 'Miriniv Misha',
       photoLink: 'img/2.jpg'
     },

     {
        id: '3',
        descriprion: ' Gorgeous sunsets, beautiful countryside, the best people-that is what is sometimes missing...',
        createdAt: new Date('2019-01-10T17:30:00'),
        author: 'Alena Holubeva',
        photoLink: 'img/3.jpg'
      },

      {
        id: '4',
        descriprion: 'Photos are different ...',
        createdAt: new Date('2018-12-15T16:30:00'),
        author: 'Elizaveta Novichenko',
        photoLink: 'img/4.jpg'
      },

      {
        id: '5',
        descriprion: 'Sometimes you just need to get to an unfamiliar city and look at everything from a different angle!',
        createdAt: new Date('2018-12-15T16:00:00'),
        author: 'Romanova Julia',
        photoLink: 'img/5.jpg'
      },

      {
        id: '6',
        descriprion: 'Thought aloud, and more precisely on paper',
        createdAt: new Date('2018-11-11T11:30:00'),
        author: 'Romanova Julia',
        photoLink: 'img/6.jpg'
      },

      {
        id: '7',
        descriprion: 'On the roofs of the city you can watch the changing scenery all day long',
        createdAt: new Date('2018-10-25T16:30:00'),
        author: 'Romanova Julia',
        photoLink: 'img/7.jpg'
      },

      {
        id: '8',
        descriprion: 'Like a light in the shower',
        createdAt: new Date('2018-10-25T12:12:00'),
        author: 'Romanova Julia',
        photoLink: 'img/8.jpg'
      },

      {
        id: '9',
        descriprion: 'Dacha, garden, nature and the best berries for me',
        createdAt: new Date('2018-09-21T16:30:00'),
        author: 'Romanova Julia',
        photoLink: 'img/9.jpg'
      },

      {
        id: '10',
        descriprion: 'Soulful day cold evening!',
        createdAt: new Date('2018-09-11T11:30:00'),
        author: 'Romanova Julia',
        photoLink: 'img/10.jpg'
      },

      {
      id: '11',
      descriprion: 'Good memory! I graduated from music school . Music is what I like !',
      createdAt: new Date('2019-02-21T16:30:00'),
      author: 'Romanova Julia',
      photoLink: 'img/nature.jpg'
     },
  
     {
       id: '12',
       descriprion: 'Nature is beautiful!',
       createdAt: new Date('2019-02-11T12:12:00'),
       author: 'Miriniv Misha',
       photoLink: 'img/2.jpg'
     },

     {
        id: '13',
        descriprion: ' Gorgeous sunsets, beautiful countryside, the best people-that is what is sometimes missing...',
        createdAt: new Date('2019-01-10T17:30:00'),
        author: 'Alena Holubeva',
        photoLink: 'img/3.jpg'
      },

      {
        id: '14',
        descriprion: 'Photos are different ...',
        createdAt: new Date('2018-12-15T16:30:00'),
        author: 'Elizaveta Novichenko',
        photoLink: 'img/4.jpg'
      },

      {
        id: '15',
        descriprion: 'Sometimes you just need to get to an unfamiliar city and look at everything from a different angle!',
        createdAt: new Date('2018-12-15T16:00:00'),
        author: 'Romanova Julia',
        photoLink: 'img/5.jpg'
      },

      {
        id: '16',
        descriprion: 'Thought aloud, and more precisely on paper',
        createdAt: new Date('2018-11-11T11:30:00'),
        author: 'Romanova Julia',
        photoLink: 'img/6.jpg'
      },

      {
        id: '17',
        descriprion: 'On the roofs of the city you can watch the changing scenery all day long',
        createdAt: new Date('2018-10-25T16:30:00'),
        author: 'Romanova Julia',
        photoLink: 'img/7.jpg'
      },

      {
        id: '18',
        descriprion: 'Like a light in the shower',
        createdAt: new Date('2018-10-25T12:12:00'),
        author: 'Romanova Julia',
        photoLink: 'img/8.jpg'
      },

      {
        id: '19',
        descriprion: 'Dacha, garden, nature and the best berries for me',
        createdAt: new Date('2018-09-21T16:30:00'),
        author: 'Romanova Julia',
        photoLink: 'img/9.jpg'
      },

      {
        id: '20',
        descriprion: 'Soulful day cold evening!',
        createdAt: new Date('2018-09-11T11:30:00'),
        author: 'Romanova Julia',
        photoLink: 'img/10.jpg'
      }
  
  ];

   photoPosts.map((v1)=> {
    console.log(v1)//map помогает преобразовать массив  
  });

  // Object - получить пост из массива photoPosts с определенным id.
  function getPhotoPost(getid)
  {
    var sum = 0; // содержит сумму числовых значений массива
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
      photoLink: 'img/nature.jpg'
     };

  console.log('Validate PhotoPosts[2] ' + validatePhotoPost(photoPosts[2]));
  console.log('Validate PhotoPost ' + validatePhotoPost(photoPost));


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
        return true;
      }
    }
    return false;
  }

  console.log("Edit PhotoPost " + editPhotoPost('1',  { descriprion: 'New post' }));

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
  
  // Array<Object>
  function getPhotoPosts(skip = 0, top = 10, filterConfig )
  {
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
        if (photoPosts[i].author == filterConfig.author)
        {
          sortPhotoPosts.push(photoPosts[i]);
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
  getPhotoPosts(10, 10,  {author: 'Romanova Julia'});

  return{
    getPhotoPost, validatePhotoPost, addPhotoPost, 
    editPhotoPost, removePhotoPost, getPhotoPosts
  }
}();














