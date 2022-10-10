<?php
if(isset($_GET['id'])) {
  $number = $_GET['id'];
    }
if(isset($_GET['question_id'])) {
  $select_question = $_GET['question_id'];
    }
if(isset($_GET['question_id'])) {
  $select_question = $_GET['question_id'];
    }


// 東京or広島
$stmt = $dbh->prepare('SELECT * FROM big_questions WHERE id =:number');
$stmt->bindValue(":number", $number);
$stmt->execute();
$big_question_name = $stmt->fetchAll(PDO::FETCH_ASSOC);

// 画像
$question_img = $dbh->prepare('SELECT * FROM questions WHERE image =:id');
$question_img ->bindValue(":image", $select_question_img);
$question_img->execute();
$select_question_img = $question_img ->fetchAll(PDO::FETCH_ASSOC);




// 問題の順番
$question_number = $dbh->prepare('SELECT * FROM choices WHERE question_id =:question_id');
$question_number->bindValue(":question_id", $select_question);
$question_number->execute();
$select_select_question = $question_number->fetchAll(PDO::FETCH_ASSOC);





?>