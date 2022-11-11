<?php
session_start();

include('./db_connect.php');

if(isset($_SESSION['user_id'])){
  $stmt = $dbh->query('SELECT language, color_code FROM languages');
  $languages= $stmt->fetchAll();
  
  $stmt =$dbh->query('SELECT study_contents, color_code FROM contents');
  $contents = $stmt->fetchAll();
}
?>
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Mulish&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c" rel="stylesheet">
  <link rel="stylesheet" href="./style.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js" defer></script>
  <script src="./script.js" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
  <script src="./webapp.js" defer></script>
  <title>POSSE</title>
</head>

<body>
  <header class="l-header">
    <div class="fixed_header">
      <div class="header_title">
        <div class="header_logo">
          <img src="img/logo.svg" alt="">
        </div>
        <p class="header_subtitle">4th week</p>
      </div>
      <div class="header_btn_container">
        <button class="header_btn">
          <p class="header_btn_content">記録・投稿</p>
        </button>
      </div>
    </div>
  </header>

  <main class="l-main">
    <div class="modal">
      <div class="modal_contents">
        <div class="modal_content modal_main">
          <div class="modal_close"></div>
          <div class="inputs">
            <div class="input_choices">
              <div class="input_study_date">
                <p class="date">学習日</p>
                <input type="text" name="date" id="date">
              </div>
              <div class="input_study_contents">
                <p class="input_study_contents_label">学習コンテンツ（複数選択可）</p>
                <div class="checkbox_container">
                  <div class="checkbox_box">
                    <input type="checkbox" name="Nyobi" id="Nyobi" class="checkbox_input">
                    <label for="Nyobi" class="checkbox_label">
                      <i class="default_checkbox"></i>
                      <?php
                      
                      ?>
                    </label>
                  </div>
                  <div class="checkbox_box">
                    <input type="checkbox" name="dotinstall" id="dotinstall">
                    <label for="dotinstall" class="checkbox_label">
                      <i class="default_checkbox"></i>
                      ドットインストール</label>
                  </div>
                  <div class="checkbox_box">
                    <input type="checkbox" name="posseHW" id="posseHW">
                    <label for="posseHW" class="checkbox_label">
                      <i class="default_checkbox"></i>
                      POSSE課題</label>
                  </div>
                </div>
              </div>
              <div class="input_study_languages">
                <p class="input_study_languages_label">学習言語（複数選択可）</p>
                <div class="checkbox_container">
                  <div class="checkbox_box">
                    <input type="checkbox" name="html" id="html">
                    <label for="html" class="checkbox_label">
                      <i class="default_checkbox"></i>
                      HTML</label>
                  </div>
                  <div class="checkbox_box">
                    <input type="checkbox" name="CSS" id="CSS">
                    <label for="CSS" class="checkbox_label">
                      <i class="default_checkbox"></i>
                      CSS</label>
                  </div>
                  <div class="checkbox_box">
                    <input type="checkbox" name="JavaScript" id="JavaScript">
                    <label for="JavaScript" class="checkbox_label">
                      <i class="default_checkbox"></i>
                      JavaScript</label>
                  </div>
                  <div class="checkbox_box">
                    <input type="checkbox" name="PHP" id="PHP">
                    <label for="PHP" class="checkbox_label">
                      <i class="default_checkbox"></i>
                      PHP</label>
                  </div>
                  <div class="checkbox_box">
                    <input type="checkbox" name="Laravel" id="Laravel">
                    <label for="Laravel" class="checkbox_label">
                      <i class="default_checkbox"></i>
                      Laravel</label>
                  </div>
                  <div class="checkbox_box">
                    <input type="checkbox" name="SQL" id="SQL">
                    <label for="SQL" class="checkbox_label">
                      <i class="default_checkbox"></i>
                      SQL</label>
                  </div>
                  <div class="checkbox_box">
                    <input type="checkbox" name="SHELL" id="SHELL">
                    <label for="SHELL" class="checkbox_label">
                      <i class="default_checkbox"></i>
                      SHELL</label>
                  </div>
                  <div class="checkbox_box">
                    <input type="checkbox" name="others" id="others">
                    <label for="others" class="checkbox_label">
                      <i class="default_checkbox"></i>
                      情報システム基礎知識（その他）</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="input_writings">
              <div class="input_study_hours">
                <p class="hours">学習時間</p>
                <input type="text" name="hours" id="hours">

              </div>
              <div class="twitter">
                <div class="input_twitter">
                  <p class="twitter">Twitter用コメント</p>
                  <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
                </div>
                <div class="twitter_checkbox">
                  <input type="checkbox" name="share" id="share">
                  <label for="share" class="checkbox_label">
                    <i class="default_checkbox"></i>
                    Twitterにシェアする</label>
                </div>
              </div>
            </div>
          </div>
          <div class="header_btn_container">
            <button class="header_btn_modal">
              <p class="header_btn_content modal_btn">記録・投稿</p>
            </button>
          </div>
        </div>
        <div class="modal_content modal_loading">
          <div class="modal_close"></div>
          <div class="loader">Loading...</div>
        </div>
        <div class="modal_content modal_complete">
          <div class="modal_close"></div>
          <div class="complete_container">
            <div class="complete_visual">
              <p class="complete">AWESOME!</p>
              <div class="complete_icon_container">
                <div class="complete_icon"><i class="default_checkbox"></i>
                </div>
              </div>
            </div>
            <div class="error_content">
              <p class="error_text">記録・投稿<br>完了しました</p>
            </div>
          </div>
        </div>
        <div class="modal_content modal_calendar">
          <div class="modal_return"></div>
          <div class="modal_calendar_container">
            <table id="tbl">
              <thead>
                <tr class="calendar_top">
                  <th id="prev">
                    <i class="left_icon"></i>
                  </th>
                  <th id="title" colspan="5">2020/05</th>
                  <th id="next">
                    <i class="right_icon"></i>
                  </th>
                </tr>
                <tr class="days">
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
                </tr>
              </thead>
              <tbody></tbody>
              <!-- <tfoot>
              <tr>
                <td id="today" colspan="7">Today</td>
              </tr>
            </tfoot> -->
            </table>
            <div class="header_btn_container">
              <button class="calendar_btn">
                <p class="header_btn_content">決定</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="statistics">
      <div class="datasets">
        <div class="datasets_value">
          <div class="datasets_value_container">
            <div class="datasets_value_list">
              <p class="datasets_value_title">Today</p>
              <p class="datasets_value_num">3</p>
              <p class="datasets_value_unit">hour</p>
            </div>
          </div>
          <div class="datasets_value_container">
            <div class="datasets_value_list">
              <p class="datasets_value_title">Month</p>
              <p class="datasets_value_num">120</p>
              <p class="datasets_value_unit">hour</p>
            </div>
          </div>
          <div class="datasets_value_container">
            <div class="datasets_value_list">
              <p class="datasets_value_title">Total</p>
              <p class="datasets_value_num">1348</p>
              <p class="datasets_value_unit">hour</p>
            </div>
          </div>
        </div>
        <div class="datasets_bar_container">
          <canvas id="datasets_bar">
            Canvas not supported...
          </canvas>
        </div>
      </div>
      <div class="pie-charts">
        <div class="pie-languages">
          <h3 class="pie-charts_title">学習言語</h3>
          <div class="pie-charts_img">
            <canvas id="pie-charts_lang">
              Canvas not supported...
            </canvas>
          </div>
        </div>
        <div class="pie-contents">
          <h3 class="pie-charts_title">学習コンテンツ</h3>
          <div class="pie-charts_img">
            <canvas id="pie-charts_content">
              Canvas not supported...
            </canvas>
          </div>
        </div>
      </div>
    </div>
    <section class="l-footer">
      <div class="period">
        <i class="left_icon"></i>
        <p class="period_content">2020年10月</p>
        <i class="right_icon"></i>
      </div>
      <div class="header_btn_container">
        <button class="header_btn">
          <p class="header_btn_content">記録・投稿</p>
        </button>
      </div>
    </section>
  </main>

</body>

</html>