
INSERT INTO branch(branchNo, street, city, postcode) 
VALUES 
('B006','165 Deer Rd', 'London', 45678),
('B002','823 Derrel Rd', 'Glasgow', 65423),
('B003','45 Bear Rd', 'Bristol', 65465),
('B005','65 Golly Rd', 'London', 51316),
('B007','24 flower Rd', 'Aberdeen', 65424);
INSERT INTO staff(staffNo, fname, lname, position, sex, DOB, salary, branchNo) 
VALUES
('SG32','John', 'White','Manager', 'Male', '12/02/2012', 30000, 'B003'),
('SJ32','Jile', 'Lee', 'Assistant','Female', '06/13/1965', 9000, 'B005');
INSERT INTO staff(staffNo, fname, lname, position, sex, DOB, salary, branchNo) 
VALUES
('SG32','John', 'White','Manager', 'Male', '12/02/2012', 30000, 'B003'),
('SJ32','Jile', 'Lee', 'Assistant','Female', '06/13/1965', 9000, 'B005');
INSERT INTO propertyforrent(propertyNo, street, city, postcode, propertyforrent.type, rooms, rent, ownerNO)
VALUES
('PA22', '16 Holbart St', 'Aberteen', 351561, 'House', '6', 650, 'COkjb'),
('PD52', '16 Holbart St', 'Aberteen', 65113, 'House', '6', 650, 'CO613');
INSERT INTO privateowner(ownerNo, fname, lname, address, telNo, eMail, password)
VALUES
('COkjb', 'Joe', 'Dank', '16 Holbart St', 3213132, 'as@dvd.com', 'sfcd'),
('CO613', 'Joe', 'Dank', '16 Holbart St', 3213132, 'afdbdf@dvd.com', 'sfcd');
INSERT INTO privateowner(ownerNo, fname, lname, address, telNo, eMail, password)
VALUES
('COkjb', 'Joe', 'Dank', '16 Holbart St', 3213132, 'as@dvd.com', 'sfcd'),
('CO613', 'Joe', 'Dank', '16 Holbart St', 3213132, 'afdbdf@dvd.com', 'sfcd');
INSERT INTO client(clientNo, fname, lname, telNo, prefType, maxRent, eMail)
VALUES
('CR76', 'Joy', 'Bong', 3213132, 'Flat', 321, 'asc@dvd.com'),
('CR56', 'Joy', 'Bong', 3213132, 'Flat', 321, 'asdc@dvd.com');
INSERT INTO viewing(viewDate, comment, clientNo, propertyNo)
VALUES
('05/12/2016', 'Good', 'CR76', 'PA22'),
('06/01/2022', 'Cool', 'CR56', 'PD52');
INSERT INTO registration(clientNo, branchNo, staffNo, dateJoined)
VALUES
('CR76', 'B006', 'SG32', '04/15/2001'),
('CR56', 'B005', 'SJ32', '03/05/2020');
