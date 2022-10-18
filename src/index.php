<?php


$user = 'root';
$password = "password";
try {
  $dbh = new PDO("mysql:host=db; dbname=posse; charset=utf8", "$user", "$password");
} catch (PDOException $e) {
  echo $e->getMessage() . " - " . $e->getLine() . PHP_EOL;
  echo "接続に失敗しました。";
}

require('./function.php');
echo $select_question_img;
?>



<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="stylesheet" href="./style.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>kuizy</title>
</head>
<body>
  <div class="wrapper" id="wrapper">
    <h1 class="content">ガチで<?= $big_question_name[0]['prefecture_name'] ?>の人しか解けない！ #<?= $big_question_name[0]['prefecture_name'] ?>の難読地名クイズ</h1>
    <div class="content">
      <!-- 問題 -->
      <h2 class="h2">この地名は何て読む？</h2>
      <img src="./img/<?=$select_question_img[1]['takanawa.png']?>"></img>
      <ul class="list-of-choices">
        <li class="choice">あああ</li>
      </ul>
    </div>
  </div>
</body>

</html>