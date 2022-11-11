<?php
include('./db_connect.php');

$stmt->execute();
$big_question_name = $stmt->fetchAll(PDO::FETCH_ASSOC);


// 画像
$stmt = $dbh->prepare('SELECT * FROM questions WHERE 
big_question_id = :number');
$stmt ->bindValue(':number', $number);
$stmt->execute();
$question = $stmt ->fetchAll(PDO::FETCH_ASSOC);





?>