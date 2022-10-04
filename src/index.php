<?php
$user = 'root';
$password = "password" ;
try{
$dbh = new PDO("mysql:host=db; dbname=posse; charset=utf8","$user","$password");

if(isset($_GET['id'])) {
  $number = $_GET['id']; 
    }



$stmt = $dbh->prepare('SELECT * FROM big_questions WHERE id =:number');

$stmt->bindValue(":number", $number);
$stmt->execute();

$big_question_name = $stmt->fetchAll(PDO::FETCH_ASSOC);
// var_dump($result);



$dbh = null;
}catch(PDOException $e){
  echo $e->getMessage()." - ".$e->getLine().PHP_EOL;
  echo "接続に失敗しました。";
}


?>

