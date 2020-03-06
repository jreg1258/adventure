DROP DATABASE IF EXISTS adventure_db;

CREATE DATABASE adventure_db;

USE adventure_db;

CREATE TABLE scenarios(
    id INTEGER NOT NULL AUTO_INCREMENT,
    scenario VARCHAR(500),
    choiceA INTEGER NOT NULL,
    choiceB INTEGER NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE choices(
    id INTEGER NOT NULL AUTO_INCREMENT,
    choice VARCHAR(500),
    PRIMARY KEY(id)
);