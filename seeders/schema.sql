DROP DATABASE IF EXISTS adventure_db;

CREATE DATABASE adventure_db;

USE adventure_db;

CREATE TABLE scenarios(
    id INTEGER NOT NULL AUTO_INCREMENT,
    scenario VARCHAR(255),
    choiceA INTEGER NOT NULL,
    choiceB INTEGER NOT NULL,
    PRIMARY KEY(id)
);

