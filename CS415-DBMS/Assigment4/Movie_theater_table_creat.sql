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