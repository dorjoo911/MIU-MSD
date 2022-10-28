use hotel_db;

CREATE TABLE Hotel(
hotelNo INT PRIMARY KEY,
hotelName VARCHAR(45),
city VARCHAR(45));

CREATE TABLE Room(
roomNo INT,
hotelNo INT NOT NULL,
FOREIGN KEY (hotelNo) REFERENCES Hotel(hotelNo)
ON DELETE CASCADE
ON UPDATE CASCADE,
type VARCHAR(45),
Price INT);

CREATE TABLE Guest(
guestNo INT PRIMARY KEY,
guestName VARCHAR(45),
guestAddress VARCHAR(65));

CREATE TABLE Booking(
hotelNo INT NOT NULL,
FOREIGN KEY (hotelNo) REFERENCES Hotel(hotelNo)
ON DELETE CASCADE
ON UPDATE CASCADE,
guestNo INT NOT NULL,
FOREIGN KEY (guestNo) REFERENCES Guest(guestNo)
ON DELETE CASCADE
ON UPDATE CASCADE,
dateFrom DATE,
dateTo DATE,
roomNo INT NOT NULL);

INSERT INTO Hotel(hotelNo, hotelName, City)
VALUES(101, 'Marriott', 'Fairfield'),
(102, 'Radisson', 'Chicago'),
(103, 'Hilton', 'London'),
(100, 'Marriott', 'Chicago');
SELECT * FROM Hotel;

INSERT INTO Room(roomNo, hotelNo, Type, Price)
VALUES(1, 101, 'Executive', 120),
(2, 101, 'Standard', 100),
(1, 102, 'Standard', 100),
(1, 100, 'Executive', 150),
(3, 103, 'Standard', 125),
(2, 100, 'Standard', 115);
SELECT * FROM Room;

INSERT INTO Guest(guestNo, guestName, guestAddress)
VALUES (6, 'Filmon', '90 Addis Way'),
(1, 'Ana', '12 John st'),
(2, 'Bob', Null),
(3, 'Carlos', '1000 N Court st'),
(4, 'David', '6 S Circle Dr'),
(5, 'Elaine', '19 Western Blvd');
SELECT * FROM Guest;

INSERT INTO Booking(hotelNo, guestNo, dateFrom, dateTo, roomNo)
VALUES (101, 2, '2021-1-13', NULL, 1),
(101, 2, '2021-1-13', '2021-1-16', 1),
(103, 1, '2021-2-9', '2021-3-25', 3),
(101, 2, '2021-2-10', '2021-2-15', 1),
(102, 4, '2021-3-4', '2021-3-9', 1);
SELECT * FROM Booking;

-- a 
SELECT * FROM Hotel where city like 'chicago' ORDER BY hotelName DESC;
-- b
SELECT r.roomNo, r.type, r.Price, h.hotelName, h.city
FROM Room AS r JOIN hotel AS h ON h.hotelNo 
WHERE Price < 130 
ORDER BY r.Price ASC;
-- c
SELECT * FROM Booking WHERE dateTo IS NULL;
-- d
SELECT COUNT(*) FROM Hotel;
-- e
SELECT ROUND(AVG(Price),2) AS Average_Price FROM room;
-- f
SELECT * FROM Booking;
SELECT h.hotelNo, h.hotelName, h.city, COUNT(b.hotelNo) AS TIMES_Booked
FROM Booking AS b JOIN hotel AS h
USING (hotelNo)
GROUP BY  b.hotelNo;
-- g
SELECT COUNT(*) AS Total_Bookings
From Booking;
-- h
SELECT * FROM guest;
SELECT * FROM Booking;
SELECT g.guestName, COUNT(b.guestNo) AS TIMES_BOOKED
FROM Booking b right JOIN guest g USING (guestNo)
GROUP BY b.guestNo
ORDER BY TIMES_BOOKED ASC;
-- i
UPDATE guest SET guestAddress = '"1490 Jersey Village Road'
WHERE guestName LIKE 'BOb';
-- j
DELETE FROM booking
WHERE guestNo IN(SELECT guestNo FROM guest WHERE guestName LIKE 'Bob')
AND dateTo IS NULL;
-- k
SELECT * FROM room;
UPDATE room SET Price = Price + Price*0.05
WHERE type = 'Executive';
UPDATE room SET Price = Price + Price*0.03
WHERE type = 'Standard';
