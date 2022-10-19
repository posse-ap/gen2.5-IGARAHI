<?php
    // 画像
// if(isset($_GET['id'])) {
//       $select_question_img = $_GET['id'];
//         }
//         var_dump($select_question_img);
    // 選択肢
// if(isset($_GET['question_id'])) {
//   $select_question = $_GET['question_id'];
    // }
require(dirname(__FILE__) . "/index.php");
$id = filter_input(INPUT_GET, 'id');

function big_questions ($dbh, $id)
{
  $stmt = $dbh->prepare('SELECT * FROM big_questions WHERE id=?');

$stmt->bindValue(1, $id);
$stmt->execute();
$big_question_name = $stmt->fetchAll(PDO::FETCH_ASSOC);

}



// 東京or広島


// 画像
// $question_img = $dbh->prepare('SELECT * FROM questions WHERE id = :id');
// $question_img ->bindValue(':id', $select_question_img);
// $question_img->execute();
// $select_question_img = $question_img ->fetchAll(PDO::FETCH_ASSOC);
// var_dump($select_question_img[2]['takanawa.png']);




// 問題の順番
// $question_number = $dbh->prepare('SELECT * FROM choices WHERE question_id =:question_id');
// $question_number->bindValue(":question_id", $select_question);
// $question_number->execute();
// $select_select_question = $question_number->fetchAll(PDO::FETCH_ASSOC);