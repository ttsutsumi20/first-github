<!-- ！！bindをしていない危険なコード！！ -->

<?php
ini_set('display_errors', 'On'); // エラーを表示させるようにしてください
error_reporting(E_ALL); // 全てのレベルのエラーを表示してください

$view = '';

// POST通信の場合のみ、実行
if($_SERVER["REQUEST_METHOD"] === "POST"){
    //1. POSTデータ取得
    $id = $_POST['id'];

    //2. DB接続します
    try {
    $pdo = new PDO('mysql:dbname=gs_db;charset=utf8;host=localhost','root','');
    } catch (PDOException $e) {
    exit('DBConnection Error:'.$e->getMessage());
    }


    //３．データ登録SQL作成
    // !! bindしていない !!
    $sql = "SELECT * FROM gs_bm_table WHERE id=:id";
    $stmt = $pdo->prepare($sql); // statement
    $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $status = $stmt->execute();

    //４．データ登録処理後
    if($status==false){
        //SQL実行時にエラーがある場合（エラーオブジェクト取得して表示）
        $error = $stmt->errorInfo();
        exit("SQL_Error:".$error[2]);
    }else{
        while( $res = $stmt->fetch(PDO::FETCH_ASSOC)){
            $view .= '<h1>';
            $view .= $res['id']. '.'. $res['title']."</br>";
            $view .= '</h1>';
            
            $view .= '<h3>';
            $view .= $res['url']."</br>";
            $view .= $res['comment']."</br>";
            $view .= '<h3>';
            
            // $view .= '<ul>';
            // $view .= "<li> $res['id']. </li>";
            // $view .= "<li> $res['title']. </li>";
            // $view .= "<li> $res['ur;']. </li>";
            // $view .= "<li> $res['comment']. </li>";
            // $view .= '</ul>';

            // $view .= '<p>';
            // $view .= $res['id'].', '.$res['title'].','.$res['url'].','.$res['comment'];
            // $view .= '</p>';
        }
    }
}
?>



<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL Injection</title>
</head>
<body>
    <div>
        <form action="sql_injection2.php" method="post">
            ID: <input type="text" name="id">
            <input type="submit" value="取得">
        </form>
    </div>
    <div>
        <p>取得結果</p>
        <div>
            <?=$view ?>
        </div>
    </div>
</body>
</html>