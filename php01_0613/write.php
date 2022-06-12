<?php
$name = $_POST["name"];
$mail = $_POST["mail"];
$color = $_POST["color"];
$c = ",";

//文字作成
$str = date("Y-m-d H:i:s").$c.$name.$c.$mail.$c.$color;
//File書き込み
$file = fopen("data/data.txt","r");	// ファイル読み込み
// ファイル内容を1行ずつ読み込んで出力
while ($str = fgets($file)) {
    echo nl2br($str); // nl2br() ... 改行文字を追加
}
fclose($file);
?>

<html>
<head>

    <!-- レイアウト画像の通り、表に枠線を追加する -->
    <style>
      table {
        border-collapse: collapse;
      }
      td {
        border: solid 1px black;
        padding: 3px;
      }
    </style>

<meta charset="utf-8">
<title>File書き込み</title>
</head>
<body>

  <table>
    <?php for($i = 1; $i <= 9; $i++){ ?>
      <tr>
        <?php for($j = 1; $j <= 9; $j++){ ?>
         <td><?php echo $i; ?> * <?php echo $j; ?> = <?php echo $i * $j; ?></td>
        <?php } ?>
      </tr>
    <?php } ?>
  </table>

<h2>./data/data.txt を確認しましょう！</h2>

<ul>
<li><a href="input.php">戻る</a></li>
</ul>
</body>
</html>