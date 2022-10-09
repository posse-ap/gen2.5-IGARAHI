<?php
require('./index.php');
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
  <h1 class="">ガチで<?=$big_question_name[0]['prefecture_name']?>の人しか解けない！ #<?= $big_question_name[0]['prefecture_name']?>の難読地名クイズ</h1>
  <!-- 問題 -->
  <div class="question_position">  
    <p>1.この地名なんて読む？</p>
    <div>
      <p>ここに画像入れるよ</p>
      <tr class="select_box"><?=$select_select_question[0]['name']?></tr>
      <tr class="select_box"><?=$select_select_question[0]['name']?></tr>
      <tr class="select_box"><?=$select_select_question[0]['name']?></tr>
    </div>
  </div>



</body>
</html>