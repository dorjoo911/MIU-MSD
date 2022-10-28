-- a. List the full details of all Staff, sorted by their firstName in ascending order.
SELECT * FROM staff ORDER BY fname ASC;
-- b. Produce a list of salaries for all staff, showing only the staff number, the first and last names, and the salary.
SELECT staffNo, fname, lname, salary FROM staff;
-- c. Produce a list of all properties that have been viewed (at least once), showing only the property number.
SELECT * FROM propertyforrent;
SELECT * FROM viewing;

select * from staff where salary > 10000;