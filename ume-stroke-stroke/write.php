<?php
$FontName = $_POST['fontName'];
$FolderDir = 'SVG-GENERATED/'.$FontName;
shell_exec('mkdir   '.$FolderDir.'  '.$FolderDir.'/font-files' );
foreach ($_POST as $key => $value) {
    if (isset($$key) AND $key !== 'fontName') continue;
      $$key = $value;
      $file = fopen($FolderDir."/".$key.".svg", "w");
      fwrite($file, $$key); 
      fclose($file);
}


shell_exec('rm -f '.$FolderDir.'/fontName.svg');

$command = escapeshellcmd('python test.py '.$FontName);
$output = shell_exec($command);


echo '<a href="FINAL/ume-stroke-stroke-'.$FontName.'.otf" >download -> '.$FonName.'.otf</a>';
?>
http://localhost/work.balsamine.www/ume-stroke-stroke/FINAL/ume-stroke-stroketest.otf
<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />

  <title></title>
  
</head>
<body style="background: #c6ffdf">
  
</body>
</html>
