
function onInputSimple(chemin, set){
  $('.cadra').remove();
  var word = $('.ume-js').html();
  var nb_car = word.length;
  var letter = word.split("");
  $('.ume-js').html('');
    for (var i = 0, l = word.length; i < l; i++) {
      var v = table[letter[i]];
      jQuery('<div/>', {
          id: v+'_'+i,
          class: 'cadra',
      }).appendTo('.ume-js');
      $('#'+v+'_'+i).load('SVG-MASTER/'+chemin+'/'+v+'.svg');
    }
}
onInputSimple( 'condensed', 'input' );


