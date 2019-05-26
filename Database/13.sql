SELECT user.NAME
from user INNER JOIN photo_post on user.USER_ID = photo_post.USER_ID
WHERE DATE = DATE(NOW())
GROUP BY photo_post.USER_ID 
HAVING count(photo_post.USER_ID) >= 3;