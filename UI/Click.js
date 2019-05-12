class Click
{
    
    
        static  addPost(post) {

            if (!PostModel.addPhotoPost(post)) {
              return false;
            }
            if (top1 + 1 <= 10) {
              View._showPost(PostModel.getPhotoPost(post.id));
              top1++;
            }
            return true;
          }
    
}