
-- 次やること
-- sqlの情報を変数にかえてindex.phpにぶち込む





DROP DATABASE IF EXISTS webapp;
CREATE DATABASE webapp;
USE webapp;

DROP TABLE IF EXISTS users;

CREATE TABLE IF EXISTS users(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  user_name VARCHAR(255) NOT NULL
);

INSERT INTO users(user_name) VALUES
('KAZU');

DROP TABLE IF EXISTS study_day_time;
CREATE TABLE study_day_time(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  user_id INT(20) NOT NULL PRIMARY KEY,
  study_day VARCHAR(255) NOT NULL,
  study_time decimal(10) NOT NULL
);

INSERT INTO study_day_time(user_id, study_day, study_time) VALUES 
(1,'2022-11-10','5'),
(1,'2022-11-11','6');


DROP TABLE IF EXISTS contents;
CREATE TABLE contents(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  study_contents VARCHAR(255) NOT NULL
  color_code VARCHAR (255) NOT NULL
);

INSERT INTO contents(study_contents) VALUES
('N予備校','#0042E5'),
('ドットインストール','#0070BA'),
('POSSE課題','#02BDDB');



DROP TABLE IF EXISTS languages;

CREATE TABLE languages(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  language VARCHAR(255) NOT NULL,
  color_code VARCHAR (255) NOT NULL
);

INSERT INTO languages(language, color_code) VALUES
('HTML','#0042E5'),
('CSS','#0070BA'),
('Javascript','#02BDDB'),
('PHP','#04CDFA'),
('Laravel','#B39DED'),
('SQL','#F6F3FD'),
('SHELL','#6C44E6'),
('その他','#2B01BA');


