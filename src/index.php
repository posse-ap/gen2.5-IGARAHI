<?php
$user = 'root';
$password = "password" ;
try{
$dbh = new PDO("mysql:host=db; dbname=posse; charset=utf8","$user","$password");



$stmt = $dbh->query('SELECT * FROM big_questions');

$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
var_dump($result);


$dbh = null;
}catch(PDOException $e){
  echo $e->getMessage()." - ".$e->getLine().PHP_EOL;
  echo "接続に失敗しました。";
}



?>
