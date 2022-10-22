<?php


// $user = 'root';
// $password = "password";
// try {
//   $dbh = new PDO("mysql:host=db; dbname=posse; charset=utf8", "$user", "$password");
// } catch (PDOException $e) {
//   echo $e->getMessage() . " - " . $e->getLine() . PHP_EOL;
//   echo "接続に失敗しました。";
// }
try {
  // DB接続
$dbh = new PDO(  // pdoインスタンスを作成
    'mysql:host=mysql;dbname=posse;',
    'root',
    'password'
  );
} catch (PDOException $e) {
    echo $e->getMessage();
    exit;     
};
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


// require('./function.php');
// echo $select_question_img;
?>
