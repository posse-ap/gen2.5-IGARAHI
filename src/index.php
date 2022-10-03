<?php

$user = 'root';
$password = "password" ;
try{
$dbh = new PDO("mysql:host=localhost; dbname=kuizy; charset=utf8","$user","$password");



$stmt = $dbh->query('SELECT * FROM big_questions');
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

print_r($result);
echo "接続に成功しました";
$dbh = null;
}catch(PDOException $e){
  echo $e->getMessage()." - ".$e->getLine().PHP_EOL;
  echo "接続に失敗しました。";
}



?>
