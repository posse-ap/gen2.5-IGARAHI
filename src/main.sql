


CREATE TABLE kuizy.big_questions(
  id INT AUT_INCRIMENT NOT NULL PRIMARY KEY,
  question_number VARCHAR(255) NOT NULL,
  prefecture_name VARCHAR(255) NOT NULL
);

INSERT INTO big_questions(question_number,prefecture_name) VALUES ('aaaaa','iiiii');