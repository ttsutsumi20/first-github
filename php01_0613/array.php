<?php
 $arr = ["a", "b", "c"];
 $arr [] ="d";
//  echo $arr[0];
echo "<pre>"; //preは文字列を綺麗にする役割
var_dump($arr);
echo "</pre>";

$str = "one,two,three";
$result = explode(",", $str);
echo "<pre>"; //preは文字列を綺麗にする役割
var_dump($result);
echo "</pre>";
?>
