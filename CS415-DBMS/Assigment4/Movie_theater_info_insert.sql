SELECT * FROM transactions;

INSERT INTO clients (fName, lName, eMail, dob, registerDate) VALUES ('Virginia','Moya','moya@gmail.com', '1990-05-17','2022-05-18');
INSERT INTO clients (fName, lName, eMail, dob, registerDate) VALUES ('Laurie','Denys','denis@gmail.com', '2000-01-20','2018-02-03');
INSERT INTO clients (fName, lName, eMail, dob, registerDate) VALUES ('Olivia','Davies','olivia@gmail.com','1998-04-15','2015-02-09');
INSERT INTO clients (fName, lName, eMail, dob, registerDate) VALUES ('Elizabeth','Edwards','elizabeth@gmail.com','2003-08-12','2000-05-18');
SELECT * FROM clients;

INSERT INTO users (fName, lName, passwords, eMail, registerDate, roll)
	VALUES ('Valentin','Thomas','p12345','thomas@gmail.com','2015-10-10', 'Manager');
INSERT INTO users (fName, lName, passwords, eMail, registerDate, roll)
	VALUES ('Noraia','Novaes','p12345','novaes@hotmail.com','2020-12-20','sale');
INSERT INTO users (fName, lName, passwords, eMail, registerDate, roll)
	VALUES ('Molly','Ross','p12345','ross@hotmail.com','2021-08-09','sale');
INSERT INTO users (fName, lName, passwords, eMail, registerDate, roll)
	VALUES ('Laura','Nielsen','p12345','nielsen@gmail.com','2019-07-02','sale');
SELECT * FROM users;


INSERT INTO movie (title, author, pubDate, BasePrice, movieLength, IMDB, image, subtitle, category, descriptions, vimeoLink, userNo) 
	VALUES ('THE ADVENTURES OF ROBIN HOOD','William Keighley','2022-01-01', 50, 180, 'AX','http://image.com','English','action','hot film', 'http://vimeo.com', 1);
INSERT INTO movie (title, author, pubDate, BasePrice, movieLength, IMDB, image, subtitle, category, descriptions, vimeoLink, userNo) 
	VALUES ('The Lion King','Irene Mecchi','2015-01-01',10,150,'https://www.imdb.com','image','English','cartoon','Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself','http://vimeo.com',2);
INSERT INTO movie (title, author, pubDate, BasePrice, movieLength, IMDB, image, subtitle, category, descriptions, vimeoLink, userNo) 
	VALUES ('Shrek','William Steig','2001-01-01',10,90,'http://imdb.com','image','English','kids','A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.','http://vimeo.com',3);
INSERT INTO movie (title, author, pubDate, BasePrice, movieLength, IMDB, image, subtitle, category, descriptions, vimeoLink, userNo) 
	VALUES ('Chip n Dale: Rescue Rangers','Dan Gregor','2022-01-01',80,240,'http://imdb.com','image','English','kids','Thirty years after their popular television show ended, chipmunks Chip and Dale live very different lives. When a cast member from the original series mysteriously disappears, the pair must reunite to save their friend','http://vimeo.com',4);
SELECT * FROM movie;

INSERT INTO promotion (descriptions,startDate,duration,rate) 
	VALUES ('advertising campaigns','2022-06-01',30,2);
INSERT INTO promotion (descriptions,startDate,duration,rate) 
	VALUES ('press releases','2022-01-01',1,50);
INSERT INTO promotion (descriptions,startDate,duration,rate) 
	VALUES ('franchising','2022-05-01',15,60);
INSERT INTO promotion (descriptions,startDate,duration,rate) 
	VALUES ('Market Research','2022-01-01',365,10);
SELECT * FROM promotion;

INSERT INTO transactions (movieNo, clientNo,dateTrans,viewTime,amount,promotionNo)
	VALUES (2,1,'2022-12-01',120,40,1);
INSERT INTO transactions (movieNo, clientNo,dateTrans,viewTime,amount,promotionNo)
	VALUES (3,2,'2022-06-01',180,40,2);
INSERT INTO transactions (movieNo, clientNo,dateTrans,viewTime,amount,promotionNo)
	VALUES (4,3,'2022-05-01',240,90,3);
INSERT INTO transactions (movieNo, clientNo,dateTrans,viewTime,amount,promotionNo)
	VALUES (5,4,'2022-03-12',30,10,4);
INSERT INTO transactions (movieNo, clientNo,dateTrans,viewTime,amount,promotionNo)
	VALUES (2,2,'2022-03-25',90,20,1);
INSERT INTO transactions (movieNo, clientNo,dateTrans,viewTime,amount,promotionNo)
	VALUES (2,2,'2022-03-02',90,20,1);
INSERT INTO transactions (movieNo, clientNo,dateTrans,viewTime,amount,promotionNo)
	VALUES (3,3,'2022-06-05',80,40,2);
INSERT INTO transactions (movieNo, clientNo,dateTrans,viewTime,amount,promotionNo)
	VALUES (4,2,'2022-05-010',40,90,3);
INSERT INTO transactions (movieNo, clientNo,dateTrans,viewTime,amount,promotionNo)
	VALUES (5,3,'2022-03-22',90,10,4);
SELECT * FROM transactions;

INSERT INTO comments (movieNo, clientNo, dateCom, comments)
	VALUES (2,1,'2022-05-07','The comment is about his opinion of Capital punishment and when and under what conditions is should be used');
INSERT INTO comments (movieNo, clientNo, dateCom, comments)
	VALUES (2,2,'2022-05-01',' The story is played on in the modern news feed format');
INSERT INTO comments (movieNo, clientNo, dateCom, comments)
	VALUES (3,3,'2022-06-01','After hearing the story of Moses, the sons of a devout Christian mother go their own ways');
INSERT INTO comments (movieNo, clientNo, dateCom, comments)
	VALUES (3,4,'2022-02-03','It looks like we dont have a Synopsis for this title yet');
INSERT INTO comments (movieNo, clientNo, dateCom, comments)
	VALUES (4,1,'2022-05-09','The comment is about his opinion of Capital punishment and when and under what conditions is should be used');
INSERT INTO comments (movieNo, clientNo, dateCom, comments)
	VALUES (4,2,'2022-05-12',' The story is played on in the modern news feed format');
INSERT INTO comments (movieNo, clientNo, dateCom, comments)
	VALUES (5,3,'2022-06-20','After hearing the story of Moses, the sons of a devout Christian mother go their own ways');
INSERT INTO comments (movieNo, clientNo, dateCom, comments)
	VALUES (5,4,'2022-02-28','It looks like we dont have a Synopsis for this title yet');
SELECT * FROM comments;


INSERT INTO review (movieNo, clientNo, dateCom, rating)
	VALUES (2,1,'2022-05-07', 10);
INSERT INTO review (movieNo, clientNo, dateCom, rating)
	VALUES (2,2,'2022-05-01',4);
INSERT INTO review (movieNo, clientNo, dateCom, rating)
	VALUES (3,3,'2022-06-01',8);
INSERT INTO review (movieNo, clientNo, dateCom, rating)
	VALUES (3,4,'2022-02-03',7);
INSERT INTO review (movieNo, clientNo, dateCom, rating)
	VALUES (4,1,'2022-05-09',5);
INSERT INTO review (movieNo, clientNo, dateCom, rating)
	VALUES (4,2,'2022-05-12',3);
INSERT INTO review (movieNo, clientNo, dateCom, rating)
	VALUES (5,3,'2022-06-20',7);
INSERT INTO review (movieNo, clientNo, dateCom, rating)
	VALUES (5,4,'2022-02-28',6);
SELECT * FROM review;