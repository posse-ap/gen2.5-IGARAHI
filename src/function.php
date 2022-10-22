<?php
include('./db_connect.php');

    // 画像
// if(isset($_GET['id'])) {
//     $number= $_GET['id'];
//         }

$big_question_name = $_GET['id'];
    // 選択肢
// if(isset($_GET['question_id'])) {
//     $select_question = $_GET['question_id'];
//     }
$select_question = $_GET['question_id'];


    //広島or東京
    function big_question() {
    $stmt = $dbh->prepare('SELECT * FROM big_questions WHERE id =:number');
    $stmt->bindValue(":number", $number);
    $stmt->execute();
    $big_question_name = $stmt->fetchAll(PDO::FETCH_ASSOC);
    var_dump('big_question:' .$big_question_name);
    return $big_question_name ;
        }  
    big_question();
// 東京or広島


// 画像
// $stmt = $dbh->prepare('SELECT * FROM questions WHERE id = :id');
// $stmt ->bindValue(':id', $select_question_img);
// $stmt->execute();
// $select_question_img = $stmt ->fetchAll(PDO::FETCH_ASSOC);





// 問題の順番
// $question_number = $dbh>prepare('SELECT * FROM choices WHERE question_id =:question_id');
// $question_number->bindValue(":question_id", $select_question);
// $question_number->execute();
// $select_select_question = $question_number->fetchAll(PDO::FETCH_ASSOC);


?>