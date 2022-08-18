CREATE DATABASE desafionode;
CREATE USER 'appnode'@'%' IDENTIFIED BY '12345';
GRANT ALL ON desafionode.* TO 'appnode'@'%';
USE desafionode;
CREATE TABLE people(name varchar(50));
