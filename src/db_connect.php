<?php


$user = 'root';
$password = "password";
try {
  $dbh = new PDO("mysql:host=db; dbname=posse; charset=utf8", "$user", "$password");
} catch (PDOException $e) {
  echo $e->getMessage() . " - " . $e->getLine() . PHP_EOL;
  echo "接続に失敗しました";
}


// require('./function.php');
// echo $select_question_img;
?>
