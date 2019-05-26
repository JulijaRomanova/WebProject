SELECT user.* from user INNER JOIN photo_post on user.USER_ID = photo_post.USER_ID
group by photo_post.USER_ID having count(photo_post.USER_ID) > 3;