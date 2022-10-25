DROP DATABASE IF EXISTS posse;
CREATE DATABASE posse;
USE posse;
DROP TABLE IF EXISTS big_questions;

CREATE TABLE big_questions(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  prefecture_name VARCHAR(255) NOT NULL
);

INSERT INTO big_questions(prefecture_name) VALUES 
('東京'),
('広島県');





-- questions
DROP TABLE IF EXISTS questions;

CREATE TABLE questions(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  big_question_id INT NOT NULL,
  image VARCHAR(255) NOT NULL
);

INSERT INTO questions(big_question_id,image) VALUES
(1,'takanawa.png'),
(1,'kameido.png'),
(2,'mukainada.png');



-- choices

DROP TABLE IF EXISTS choices;

CREATE TABLE choices(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  question_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  valid INT NOT NULL
);

INSERT INTO choices(select_question_id,question_id,name,valid) VALUES
(1,1,'たかなわ',1),
(1,1,'たかわ',0),
(1,1,'こうわ',0),
(1,2,'かめと',0),
(1,2,'かめど',0),
(1,2,'かめいど',1),
(2,3,'むこうひら',0),
(2,3,'むきひら',0),
(2,3,'むかいなだ',1);


