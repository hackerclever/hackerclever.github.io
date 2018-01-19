<?php
define("AJXP_LOCALE", "th_TH.UTF-8");
// $namefile = $_POST['path'];
// $namefile = "data/krabi.txt";
$namefile = "data/กระบี่.txt";
// $namefile = iconv("utf-8", "cp936", $namefile);
// require $namefile;
// print ("a".file_exists($namefile));
$handle = fopen($namefile,'r');
while (!feof($handle)) {
  print(fgets($handle,1024));
}
fclose($handle);
// print(getcwd());
print("$namefile");
// print(ini_get("open_basedir"));

 ?>
