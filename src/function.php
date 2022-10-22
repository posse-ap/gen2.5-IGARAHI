<?php
include('./db_connect.php');

    // 画像
if(isset($_GET['id'])) {
    $number= $_GET['id'];
    }

if(isset($_GET['id'])) {
    $number= $_GET['id'];
    }


// $select_question = $_GET['question_id'];


    //広島or東京
    $stmt = $dbh->prepare('SELECT * FROM big_questions WHERE id =:number');
    $stmt->bindValue(":number", $number);
    $stmt->execute();
    $big_question_name = $stmt->fetchAll(PDO::FETCH_ASSOC);


// 画像
  $stmt = $dbh->prepare('SELECT * FROM questions WHERE 
big_question_id = :number');
$stmt ->bindValue(':number', $number);
$stmt->execute();
$select_question_img = $stmt ->fetchAll(PDO::FETCH_ASSOC);
echo $select_question_img[0]['image'];




// 問題の順番
$stmt = $dbh->prepare('SELECT * FROM choices where question_id ');
$stmt->bindValue(":question_id", $select_question);
$stmt->execute();
$select_select_question = $question_number->fetchAll(PDO::FETCH_ASSOC);


?>