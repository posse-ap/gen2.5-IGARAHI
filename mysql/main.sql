DROP SCHEMA IF EXISTS posse;
CREATE SCHEMA posse;
USE posse;

DROP TABLE IF EXISTS big_questions;

CREATE TABLE big_questions(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  prefecture_name VARCHAR(255) NOT NULL
);

INSERT INTO big_questions(prefecture_name) VALUES ('東京');
INSERT INTO big_questions(prefecture_name) VALUES ('広島');
INSERT INTO big_questions(prefecture_name) VALUES ('上海');
