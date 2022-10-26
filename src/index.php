
<?=
include('./db_connect.php') ;
include('./function.php') ;

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
    <h1 class="content">ガチで
      <?= $big_question_name[0]['prefecture_name']?>
      の人しか解けない！ #
      <?= $big_question_name[0]['prefecture_name']?>
      の難読地名クイズ</h1>
      <?php
      $i = 0;
      foreach($formatted_choices as $question){?>
                  <div class="content">
                    <!-- 問題 -->
                    <h2 class="h2">この地名は何て読む？</h2>
                    <img src="./img/<?=$question[$i]['image']?>"></img>
                    <ul class="list-of-choices">
                      <li class="choice">
                        <?php
                          foreach($formatted_questions as $select){?>
                          <?php 
                            $select[$i]['name'];
                            ?>
                      <?php   
                      $i++;
                      }
                        ?>
                        aaa
                      </li>
                    </ul>
                  </div>
                  <?php
                  $i++;
                };?>
    
  </div>
</body>

</html>