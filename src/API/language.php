<?php
include('../db_connect.php');

try {
  // $a_language 
  $stmt = $dbh->query('SELECT languages.id, language, color_code,sum(study_time)  FROM conclusion INNER JOIN study_day_time ON study_day_time_id = study_day_time.id RIGHT JOIN languages ON languages_id = languages.id group by languages.id order by languages.id');
  
  $study_languages = $stmt->fetchAll();


  echo json_encode($study_languages, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
  echo $e->getMessage();
  exit();
}





