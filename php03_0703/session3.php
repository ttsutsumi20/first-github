<?php

session_start();

$sid = session_id();

echo $sid;

$_SESSION["name"] = "堤見";
$_SESSION["age"] = 26;

?>