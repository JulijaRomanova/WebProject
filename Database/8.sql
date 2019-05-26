SELECT NAME, DESCRIPTION, DATE
from user INNER JOIN photo_post on user.USER_ID = photo_post.USER_ID
order by DATE;