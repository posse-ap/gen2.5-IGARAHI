<?php
include('./db_connect.php');

    // 画像
if(isset($_GET['id'])) {
    $number= $_GET['id'];
    }
    // 問題の表示



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
$question = $stmt ->fetchAll(PDO::FETCH_ASSOC);


function groupBy($key, array $ary): array
{
$result = [];

foreach ($ary as $row) {
        if (array_key_exists($key, $row)) {
            $result[$row[$key]][] = $row;
        } else {
            $result[""][] = $row[$key];
        }
    } 

    return $result;
}

$ssq = $dbh->prepare('SELECT * FROM questions INNER JOIN choices ON question_id = questions.id WHERE big_question_id = :number');
$ssq ->bindValue(':number', $number);
$ssq->execute();
$choices = $ssq ->fetchAll(PDO::FETCH_ASSOC);
$formatted_choices = groupBy('question_id', $choices);
// print_r('<pre>');
// var_dump($formatted_choices);
// print_r('</pre>');

// $select_select_question = $stmt->fetchAll(PDO::FETCH_ASSOC);
// // echo $select_select_question[];





// 問題の順番
// $stmt = $dbh->prepare('SELECT * FROM choices where question_id = :question_id');
// $stmt->bindValue(":question_id", $select_question);
// $stmt->execute();
// $select_select_question = $select_question->fetchAll(PDO::FETCH_ASSOC);
// echo $select_select_question[0]['question_id'];


?>