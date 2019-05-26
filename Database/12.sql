SELECT USER_ID, count(*) as post_count
from photo_post where DATE = '19.05.09' 
group by USER_ID;