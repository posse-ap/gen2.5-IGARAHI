<!-- sqlのconclusionの情報を基盤にlanguagesとstudy_day_timeでinner join -->


<?php

include('../db_connect.php');

try{
  $stmt = $dbh->query('SELECT sum() from languages');
  $study_languages = $stmt->fetchAll();

  echo json_encode($study_languages, JSON_UNESCAPED_UNICODE);

} catch (PDOException $e) {
  echo $e->getMessage();
  exit();
}



?>
