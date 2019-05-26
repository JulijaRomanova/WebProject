SET @result = NOW();

SELECT DATE into @result from photo_post
ORDER BY DATE 
LIMIT 1;

SELECT abs(datediff(DATE(NOW()), @result));