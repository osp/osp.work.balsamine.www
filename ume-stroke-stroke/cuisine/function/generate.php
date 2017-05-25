<?php
echo "bien";

function rd_File($input){
  echo $input;
  $fp = fopen($input.".svg", "r");

  while(!feof($fp)) {
    $Ligne = fgets($fp,255);
    echo $Ligne;
    $Fichier .= $Ligne;
  }
  fclose($fp); // On ferme le fichier
}

rd_File('test');

function ScanDirectory($Directory){

  $MyDirectory = opendir($Directory) or die('Erreur');
  while($Entry = @readdir($MyDirectory)) {
    if(is_dir($Directory.'/'.$Entry)&& $Entry != '.' && $Entry != '..' && $Entry != '.git') {
      echo '<span class="minia" ><img src="'.Directory.'/'.$Entry.'" /></span>';
      ScanDirectory($Directory.'/'.$Entry);
      echo '</ul>';
    } else {
      if (($Entry!='.')&&($Entry!='..')&&($Entry!='.git')) {
        echo '<div class="minia" ><img src="'.$Directory.'/'.$Entry.'" /></div>';
    }
    }
  }
  closedir($MyDirectory);
}
ScanDirectory('simple');


?>
