<?php
$namefile = $_POST['path'];
$namefile = iconv("utf-8", "tis-620", $namefile );
$handle = fopen($namefile,'r');
while (!feof($handle)) {
  print(fgets($handle,1024));
}
fclose($handle);
// print(getcwd());
?>
