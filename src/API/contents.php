<?php
include('../db_connect.php');


try{
  $stmt = $dbh->query('SELECT contents.id, study_contents, color_code, study_time from contents_conclusion INNER JOIN study_day_time ON study_time_id = study_day_time.id RIGHT JOIN contents ON contents_id = contents.id ');
  $study_contents = $stmt->fetchAll();

  echo json_encode($study_contents, JSON_UNESCAPED_UNICODE);

} catch (PDOException $e) {
  echo $e->getMessage();
  exit();
}


?>

