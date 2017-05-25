<?php
  $nameGlyph = $_GET['glyph'];
  $svgCode = $_POST['svg']; // récupération de l'adresse envoyée avec le formulaire (ton champ de texte doit s'appeler "email")
  $file = fopen("final/".$nameGlyph.".svg", "w"); // ouvre le fichier en écriture
  fwrite($file, $svgCode); // ecrit l'e-mail dans le fichier
  fclose($file); // ferme le fichier
  // echo $email;
?>


<html><head>
<script language="javascript" src="../js/jquery-3.1.1.min.js"></script>
<style type="text/css" media="all">
  .container{
    height: 200px;
    width: auto;
  }
  svg{
    height: 100%;
    width: auto;
  }
  .minia{
    text-align: center;
    float: left;
    width: 40px;
    height:40px;
    margin-right: -1px;
    border: 1px solid grey;
    overflow: visible;
  }
  .minia{
    background: yellow;
  }
.minia img {height: 80%; width: auto}
</style>
</head>

<body>

<?php include 'function/generate.php'; ?>




<div data-glyph="<?php echo $nameGlyph; ?>" class="container" name="svg" >sss</div>

<form action="#" method="post">
<textarea type="text" name="svg" >eeee</textarea>
<input type="submit" value="valider" />
</form>
<!-- <input type="submit" value="load" onClick="load2text();" /> -->

<script language="javascript" src="../js/table.js"></script>
<script type="text/javascript" charset="utf-8">
var cont = $('.container');
var nameGlyph = cont.attr('data-glyph');
$('.container').load('simple/'+nameGlyph+'.svg');
$(document).ready(function(){
  $('path.int').css('stroke-width', '100');
  $('path.ext').css('stroke-width', '100');
  $('path').css('stroke-linecap','round')
  $('path').css('stroke-linejoin','round')
  var contSvg = $('.container').html();
  $('textarea').html(contSvg);
});



</script>
</body></html>
