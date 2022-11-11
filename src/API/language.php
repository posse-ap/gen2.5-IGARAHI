<?php

include('../db_connect.php');

try{
  $stmt = $dbh->query('SELECT * from languages');
  $study_languages = $stmt->fetchAll();

  echo json_encode($study_languages, JSON_UNESCAPED_UNICODE);

} catch (PDOException $e) {
  echo $e->getMessage();
  exit();
}


?>
