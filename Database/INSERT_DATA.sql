DELETE from post_likes;
DELETE from post_hashtags;
DELETE from photo_post;
DELETE from user;

INSERT into user
VALUES
('sv21rc', 'Julia Romanova'),
('kljhgf', 'Andrei Mironov'),
('ertyuioi', 'Sergei Staselko'),
('poi84657u', 'Maria Dmitrieva'),
('semaphore_ko', 'Nikita Pushkin');


INSERT into photo_post
VALUES
('vbdsyftyi', 'Some description', '19.02.15', 'https://avatars.mds.yandex.net/get-pdb/805160/b1ae95cd-6b0d-4a61-8586-79a59ae86d51/s1200', 'kljhgf'),
('eurt789436', 'Good day, hello!', '19.05.09', 'https://img3.stockfresh.com/files/k/karandaev/m/98/7576300_stock-photo-colorful-macaroons-coffee-sweet-macarons.jpg', 'sv21rc'),
('poiuyt365fd3bk', 'Books are my life', '19.04.23', 'http://itd2.mycdn.me/image?id=866157555127&t=20&plc=WEB&tkn=*ORZBT7bVVgWpzEZPYxr7URT9UIc', 'poi84657u'),
('sdg123poer', 'Evening', '19.05.12', 'https://images.wallpaperscraft.com/image/russia_park_evening_shop_879_1680x1050.jpg', 'ertyuioi'),
('jdhfd32764k' , 'My project', '19.05.25', 'https://mirkb.ru/wp-content/uploads/2017/08/Чертим-самостоятельно.jpg', 'poi84657u'),
('dfhs653dsfjh', 'fffhellofddhfh', '19.04.23', 'https://get.pxhere.com/photo/pencil-sharp-colourful-color-colorful-pencils-colour-pencils-color-pencils-wooden-pencils-992970.jpg', 'poi84657u'),
('dsgfsjf234srejh', 'new post', '19.03.30', 'https://get.pxhere.com/photo/pencil-sharp-colourful-color-colorful-pencils-colour-pencils-color-pencils-wooden-pencils-992970.jpg', 'poi84657u'),
('ewrthsrejh', 'new post', DATE(NOW()), 'https://get.pxhere.com/photo/pencil-sharp-colourful-color-colorful-pencils-colour-pencils-color-pencils-wooden-pencils-992970.jpg', 'semaphore_ko'),
('ewrthsrejh1', 'new post1', DATE(NOW()), 'https://get.pxhere.com/photo/pencil-sharp-colourful-color-colorful-pencils-colour-pencils-color-pencils-wooden-pencils-992970.jpg', 'semaphore_ko'),
('ewrthsrejh2', 'new post2', DATE(NOW()), 'https://get.pxhere.com/photo/pencil-sharp-colourful-color-colorful-pencils-colour-pencils-color-pencils-wooden-pencils-992970.jpg', 'semaphore_ko');

INSERT into post_likes
VALUES
(1, 'poi84657u', 'eurt789436'),
(2, 'poi84657u', 'dfhs653dsfjh'),
(3, 'ertyuioi', 'sdg123poer'),
(4, 'sv21rc', 'vbdsyftyi'), 
(5, 'kljhgf', 'eurt789436'),
(6, 'ertyuioi', 'eurt789436');

INSERT into post_hashtags
VALUES
(1, 'eurt789436', 'wtf'),
(2, 'eurt789436', 'ftw'),
(3, 'eurt789436', 'ftwwtf'),
(4, 'sdg123poer', 'smth'),
(5, 'jdhfd32764k', 'smb'),
(6, 'vbdsyftyi', 'kto-to kogo-to'),
(7, 'vbdsyftyi', 'gde-to kuda-to'),
(8, 'jdhfd32764k', 'povar'),
(9, 'sdg123poer', 'veru'),
(10, 'sdg123poer', 'a_moskva_ne_verit');
