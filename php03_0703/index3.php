<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>NEWS登録</title>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <style>div{padding: 10px;font-size:16px;}</style>
</head>
<body>

<!-- Head[Start] -->
<header>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
    <div class="navbar-header"><a class="navbar-brand" href="select3.php">記事一覧</a></div>
    <div class="navbar-header"><a class="navbar-brand" href="login3.php">ログイン</a>
    <div class="navbar-header"><a class="navbar-brand" href="logout3.php">ログアウト</a>
    </div>
  </nav>
</header>
<!-- Head[End] -->

<!-- Main[Start] -->
<form method="post" action="insert3.php">
  <div class="jumbotron">
   <fieldset>
    <legend>ニュースクリップ</legend>
     <label>記事タイトル：<input type="text" name="title"></label><br>
     <label>URL：<input type="text" name="url"></label><br>
     <label><textArea name="comment" rows="4" cols="40"></textArea></label><br>
     <input type="submit" value="送信">
    </fieldset>
  </div>
</form>
<!-- Main[End] -->


</body>
</html>
