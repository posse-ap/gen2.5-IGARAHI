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
$questions = $ssq ->fetchAll(PDO::FETCH_ASSOC);

$formatted_choices = groupBy('question_id', $choices);

// $formatted_questions = groupBy('question_id', $questions);
// print_r('<pre>');
// var_dump($formatted_choices);
// print_r('</pre>');





?>