-- remove one column from one of the tables
alter table student
drop phone; 

-- change the data type for one column in one of the tables
ALTER TABLE student
MODIFY COLUMN class int(10) NOT NULL;

-- adding a new column to one of the tables with a default value
ALTER TABLE course
ADD COLUMN `Address` varchar(255) DEFAULT 'Denmark' NOT NULL;

-- modifying two entries (rows) in one of the tables
UPDATE student
SET class = '07'
where id =2; 
    
UPDATE student
SET name = 'samara' 
where id = '2';

-- delete two entries in one of the tables
delete from student
where id = '1' or id = '8';

-- adding an index to one of the columns in one of the tables
CREATE INDEX class ON student(class);


