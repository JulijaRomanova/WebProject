SELECT *
from user INNER JOIN photo_post on user.USER_ID = photo_post.USER_ID
where length(DESCRIPTION)>200;