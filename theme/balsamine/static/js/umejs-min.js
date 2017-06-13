var zoneNumb = 0;
function onInputSimple(chemin, zone){
  $('.cadra').remove();
  var zoneText = $(zone);
  zoneText.each( function(){
    var sizefont = $(this).css('font-size');
    var word = $(this).html();
    // alert(word)
    var nb_car = word.length;
    var letter = word.split("");
    $(this).html('');
    for (var i = 0, l = word.length; i < l; i++) {
      var v = table[letter[i]];
      jQuery('<div/>', {
          'id': zoneNumb+'_'+v+'_'+i,
          'class': 'cadra',
          'height': sizefont
      }).appendTo(this);

      $('#'+zoneNumb+'_'+v+'_'+i).load('/theme/fonts/SVG-MASTER/'+chemin+'/'+v+'.svg');

    }
    zoneNumb++;
  });


}
$(window).ready(function(){
  // onInputSimple( 'condensed', '.ume-js h1');
  // onInputSimple( 'condensed', '.schedule__title .ui-link');

})


      // $('body').load('/theme/fonts/SVG-MASTER/condensed/A.svg');
