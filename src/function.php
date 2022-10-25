<?php
include('./db_connect.php');

    // 画像
if(isset($_GET['id'])) {
    $number= $_GET['id'];
    }
    // 問題の表示
if(isset($_GET['question_id'])) {
    $question= $_GET['question_id'];
    }



// $select_question = $_GET['question_id'];


    //広島or東京
    $stmt = $dbh->prepare('SELECT * FROM big_questions WHERE id =:number');
    $stmt->bindValue(":number", $number);
    $stmt->execute();
    $big_question_name = $stmt->fetchAll(PDO::FETCH_ASSOC);


// 画像
  $stmt = $dbh->prepare('SELECT * FROM questions WHERE 
big_question_id = :number');
$stmt ->bindValue(':number', $number);
$stmt->execute();
$select_question_img = $stmt ->fetchAll(PDO::FETCH_ASSOC);


function question_number_random(){
    if(isset($_GET['id'])) {
        $question_id= $_GET['id'];
        }
    $dbh = new PDO("mysql:host=db; dbname=posse; charset=utf8", "root", "password");
$select_select_question = $dbh->prepare('SELECT * FROM choices WHERE question_id = :number');
$select_select_question ->bindValue(':number', $question_id);
$sql = 'SELECT big_question_id FROM questions INNER JOIN choices  ON question_id =question_id';
$select_select_question = $dbh->query($sql)->fetchColumn();

return $select_select_question;
}
question_number_random();
var_dump($select_select_question) ;

// $select_select_question = $stmt->fetchAll(PDO::FETCH_ASSOC);
// // echo $select_select_question[];





// 問題の順番
// $stmt = $dbh->prepare('SELECT * FROM choices where question_id = :question_id');
// $stmt->bindValue(":question_id", $select_question);
// $stmt->execute();
// $select_select_question = $select_question->fetchAll(PDO::FETCH_ASSOC);
// echo $select_select_question[0]['question_id'];


?>