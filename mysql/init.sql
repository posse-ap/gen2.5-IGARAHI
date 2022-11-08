DROP DATABASE IF EXISTS webapp;
CREATE DATABASE webapp;
USE webapp;

DROP TABLE IF EXISTS study_day_time;


CREATE TABLE study_day_time(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  study_day VARCHAR(255) NOT NULL,
  study_time decimal(10) NOT NULL
);

INSERT INTO study_day_time(study_day, study_time) VALUES 
('2022-11-10','5'),
('2022-11-11','6');



DROP TABLE IF EXISTS contents;

CREATE TABLE contents(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  study_contents VARCHAR(255) NOT NULL,
);

INSERT INTO contents(study_contents) VALUES
('N予備校'),
('ドットインストール'),
('POSSE課題');



DROP TABLE IF EXISTS languages;

CREATE TABLE languages(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  study_languages VARCHAR(255) NOT NULL,
);


-- INSERT INTO choices(select_question_id)

-- ALTER TABLE choices
-- ADO select_question_id INT NOT NULL;