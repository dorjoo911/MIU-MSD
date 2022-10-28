CREATE DATABASE cinema;

CREATE TABLE users (
userNo INT NOT NULL AUTO_INCREMENT NOT NULL UNIQUE, 
fName VARCHAR(255),
lName VARCHAR(255),
passwords VARCHAR(20),
eMail VARCHAR(50),
registerDate DATE,
roll VARCHAR(50),
PRIMARY KEY (userNo)
);

CREATE TABLE movie (
movieNo INT NOT NULL AUTO_INCREMENT NOT NULL UNIQUE,
title VARCHAR(255),
author VARCHAR(255),
pubDate DATE,
BasePrice INT,
movieLength INT,
IMDB VARCHAR(50),
image VARCHAR(100),
subtitle VARCHAR(100),
category VARCHAR(100),
descriptions TEXT,
vimeoLink VARCHAR(100),
userNo INT,
PRIMARY KEY (movieNo),
FOREIGN KEY(userNo) REFERENCES users(userNo) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE promotion (
id INT NOT NULL AUTO_INCREMENT NOT NULL UNIQUE,
descriptions TEXT,
startDate DATE,
duration INT,
rate INT,
PRIMARY KEY (id)
);

CREATE TABLE clients (
clientNo INT NOT NULL AUTO_INCREMENT UNIQUE,
fName VARCHAR(255),
lName VARCHAR(255),
eMail VARCHAR(50),
dob DATE,
registerDate DATE,
PRIMARY KEY (clientNo)
);

CREATE TABLE transactions (
movieNo INT NOT NULL,
clientNo INT NOT NULL,
dateTrans DATE,
viewTime INT,
amount INT,
promotionNo INT,
PRIMARY KEY (movieNo, clientNo),
FOREIGN KEY (movieNo) REFERENCES movie(movieNo) ON UPDATE CASCADE,
FOREIGN KEY (clientNo) REFERENCES clients(clientNo) ON UPDATE CASCADE,
FOREIGN KEY (promotionNo) REFERENCES promotion(id) ON UPDATE CASCADE
);

CREATE TABLE comments (
movieNo INT NOT NULL,
clientNo INT NOT NULL,
dateCom	DATE,
comments TEXT,
PRIMARY KEY (movieNo, clientNo),
FOREIGN KEY (movieNo) REFERENCES movie(movieNo) ON UPDATE CASCADE,
FOREIGN KEY (clientNo) REFERENCES clients(clientNo) ON UPDATE CASCADE
);

CREATE TABLE review (
movieNo INT NOT NULL,
clientNo INT NOT NULL,
dateCom	DATE,
rating SMALLINT,
PRIMARY KEY (movieNo, clientNo),
FOREIGN KEY (movieNo) REFERENCES movie(movieNo) ON UPDATE CASCADE,
FOREIGN KEY (clientNo) REFERENCES clients(clientNo) ON UPDATE CASCADE);
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

# show last comment on movie title, client fullname
select CONCAT(c.fName,' ', c.lName) AS fullname, m.title, cm.comments 
from clients c right join comments cm on c.clientNo = cm.clientNo 
join movie m on cm.movieNo = m.movieNo
order by dateCom desc limit 1;
# most spend client
select t.clientNo, CONCAT(c.fName,' ', c.lName) AS fullname, max(t.amount) 
from clients c join transactions t on c.clientNo = t.clientNo; 
# most rated movie
select m.title, COUNT(r.rating) as times_rated #, c.lName
from movie m join review r on m.movieNo = r.movieNo
join clients c on c.clientNo = r.clientNo
group by r.movieNo
having times_rated > 2;
# show movies rated more that 7 point. 
select m.movieNo, m.title, avg(r.rating) as avg_rating
from movie m
join review r on m.movieNo = r.movieNo
group by r.movieNo
having avg_rating > 7;
# most promoted client with total amount of promotion
select CONCAT(c.fName,' ', c.lName) AS fullname, t.amount as Promoted 
from clients c join transactions t on c.clientNo = t.clientNo
join promotion p on t.promotionNo = p.id
group by t.promotionNo
having sum(p.rate)
order by t.amount desc limit 1;
SELECT * FROM movie;
SELECT title FROM movie WHERE BasePrice > 10;

SELECT m.title, r.rating FROM movie m JOIN review r ON m.movieNo = r.movieNo WHERE r.rating > 6
ORDER BY rating ASC;

SELECT * FROM transactions;

-- produce the average view time of clients
SELECT AVG(viewTime) AS 'Average clients view time' FROM transactions;
SELECT ROUND(AVG(viewTime),2) AS 'Average clients view time' FROM transactions;

-- produce the average view time of each movie
SELECT movieNo, ROUND(AVG(viewTime),2) AS 'Average clients view time' 
FROM transactions
GROUP BY movieNo;

-- produce the list movie name, average view time of each movie
SELECT m.title, ROUND(AVG(t.viewTime),2) AS 'Average clients view time' 
FROM movie m JOIN transactions t ON m.movieNo = t.movieNo
GROUP BY m.movieNo;

-- produce the movie name, that has average view time maximum
SELECT m.title, ROUND(AVG(t.viewTime),2) AS avgViewTime
FROM movie m JOIN transactions t ON m.movieNo = t.movieNo
GROUP BY m.movieNo
ORDER BY avgViewTime DESC
LIMIT 1;

-- produce the list of movie name that have average view time greater than 100 minutes
SELECT m.title, ROUND(AVG(t.viewTime),2) AS avgViewTime
FROM movie m JOIN transactions t ON m.movieNo = t.movieNo
GROUP BY m.movieNo
HAVING avgViewTime > 100;

-- produce the list of movie name that are viewed
SELECT title FROM movie
where movieNo IN ( SELECT DISTINCT movieNo FROM transactions);

-- produce the list of movie name that are NOT viewed
SELECT title FROM movie
where movieNo NOT IN ( SELECT DISTINCT movieNo FROM transactions);

-- Produce the list of clients and number of year register

SELECT * FROM clients;
SELECT * FROM transactions;

SELECT CONCAT(fName, ' ', lName) AS fullName,timestampdiff(year,registerDate,now()) as years  FROM clients;
SELECT CONCAT(fName, ' ', lName) AS fullName,timestampdiff(year,registerDate,now()) as years  FROM clients where timestampdiff(year,registerDate,now()) >5;

select clientNo, sum(viewTime) as v from transactions group by clientNo order by v desc limit 1;

-- produce list of movie publish in 2 months
select * from movie;
select title, timestampdiff(month, pubDate, now()) from movie where timestampdiff(month, pubDate, now()) <= 2;
select title, timestampdiff(month, pubDate, now()) as tt from movie having tt <= 2;

-- produce list of movie title that have a word "chip" 
SELECT title FROM movie WHERE title like '%chip%';

