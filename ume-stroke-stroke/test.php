
<?php

// $command = escapeshellcmd('python test.py thin');
// $output = shell_exec($command);
// echo $output;
$command = escapeshellcmd('bash generate.sh');
$output = shell_exec($command);
echo $output;

?>

