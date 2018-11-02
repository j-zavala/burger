-- Create the burgers_db databse
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create a burgers table with the required fields
CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
)