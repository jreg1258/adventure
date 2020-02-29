DROP DATABASE IF EXISTS adventure_db;

CREATE DATABASE adventure_db;

USE adventure_db;

CREATE TABLE scenarios(
    id integer not null auto_increment,
    scenario varchar(255),
    choiceA integer not null,
    choiceB integer not null,
    primary key(id)
);