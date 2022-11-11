<?php
include('../db_connect.php');



try{
  $stmt = $dbh->query('SELECT day, sum(study_time) from study_day_time where year =2022 && month = 11 group by day');
  $each_day_study_time = $stmt->fetchAll();

  echo json_encode($each_day_study_time, JSON_UNESCAPED_UNICODE);

} catch (PDOException $e) {
  echo $e->getMessage();
  exit();
}





