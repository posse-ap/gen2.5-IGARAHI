<?php
$user = 'root';
$password = "password" ;
try{
$dbh = new PDO("mysql:host=db; dbname=posse; charset=utf8","$user","$password");

if(isset($_GET['id'])) {
  $number = $_GET['id'];
    }
if(isset($_GET['question_id'])) {
  $select_question = $_GET['question_id'];
    }

// 東京or広島
$stmt = $dbh->prepare('SELECT * FROM big_questions WHERE id =:number');
$stmt->bindValue(":number", $number);
$stmt->execute();
$big_question_name = $stmt->fetchAll(PDO::FETCH_ASSOC);


// 問題の順番
$qsnb = $dbh->prepare('SELECT * FROM choices WHERE question_id =:question_id');
$qsnb>bindValue(":question_id", $select_question);
$qsnb->execute();
$select_select_question = $qsnb->fetchAll(PDO::FETCH_ASSOC);
// var_dump($result);

// $choice_question = $dbh->prepare('SELECT * FROM questions WHERE id =:')


$dbh = null;
}catch(PDOException $e){
  echo $e->getMessage()." - ".$e->getLine().PHP_EOL;
  echo "接続に失敗しました。";
}


?>

