var masterVersion = ['expanded', 'condensed'];
var viewSet = false;

function range(idStroke, valStart, valMax, propri, attri){
  var rangeHtml = '<li>'+idStroke+' | '+propri+'<br><input data-attri="'+attri+'" data-propri="'+propri+'" type="range"  min="0" max="'+valMax+'" value="'+valStart+'" name="discount_credits" class="discount_credits" id="'+idStroke+'" /><span>'+valStart+'</span></li>';
  $("footer").append(rangeHtml);
}

function extractRange(objt){
    var valStroke = $(objt).val();
    var idStroke = $(objt).attr('id');
    var attri = $(objt).attr('data-attri');
    var propri = $(objt).attr('data-propri');
    $(objt).next().html($(objt).val());
    var calc = (1550 - valStroke/10/1) / 1450;
    var test = valStroke/(20*calc ) - 50;
    $('.'+idStroke).css(propri, ''+valStroke/10+'');
}

function formSave(){
  $('<form/>', {
    class: 'formSet',
    method: 'post',
    action: 'write.php'
  }).prependTo('.caseSet');

  $('<input/>',{
    value: 'save SVG',
    type: 'submit',
    class: 'save'
  }).prependTo('.formSet');
  
  $('<input/>',{
    value: 'enter font name',
    type: 'text',
    class: 'save',
    name: 'fontName'
  }).prependTo('.formSet');

  $('.cadra_set').each(function(){
    var glyphName = $(this).attr('data-glyph');
    var glyphXml = $(this).html();
    $('<textarea/>', {
      name: glyphName,
      id: 'textarea_'+glyphName
    }).appendTo('.formSet');
    $('#textarea_'+glyphName).html(glyphXml);
  })
  $('input.form').remove();
}

function caseSet(chemin){
  
  $('<div/>', {
    class: 'caseSet',
  }).prependTo('.container');

  for (var i = 0, l = tableSet.length; i < l; i++) {
    var v = tableSet[i];
    $('<div/>', {
        'data-glyph': v,
        id: v+'_'+i,
        class: 'cadra_set'
    }).appendTo('.caseSet');
    $('#'+v+'_'+i).load('SVG-MASTER/'+chemin+'/'+v+'.svg');
  }
    $('.cadra_set').ready(function(){
      var inputs = $('li input');
      inputs.each(function(){
        extractRange(this);
      });
    })
  $('<input/>',{
    value: 'form',
    type: 'submit',
    class: 'form',
    onClick: 'formSave("bien")'
  }).prependTo('.caseSet');

  //
}

function onInput(chemin, set){
  $('.cadra').remove();
  var word = $('#chaine').val();
  var nb_car = word.length;
  var letter = word.split("");

  if(set == 'input'){

    for (var i = 0, l = word.length; i < l; i++) {
      var v = table[letter[i]];
      jQuery('<div/>', {
          id: v+'_'+i,
          class: 'cadra',
      }).appendTo('.container');
      $('#'+v+'_'+i).load('SVG-MASTER/'+chemin+'/'+v+'.svg');
    }
    $('.cadra').ready(function(){
      var inputs = $('li input');
      inputs.each(function(){
        extractRange(this);
      });
    })

  } else if( set == 'all'){
    caseSet(chemin);
  }
}


function reLoad(){
  var hashLocal = masterVersion.indexOf(location.hash.substring(1));
  if(hashLocal == (masterVersion.length -1)){
    var newVersion = 0;
  }else{
    var newVersion = hashLocal + 1;
  }
  if($('.caseSet').length > 0){
    var setChar = 'all';
  }else{
    var setChar = 'input';
  }
  location.hash = masterVersion[newVersion];
  onInput(masterVersion[newVersion], setChar);
}

$('#chaine').keyup(function(){
  var hashLocal = location.hash.substring(1);
  onInput(hashLocal, 'input' );
})

function localHash(){
  var hashLocal= location.hash;
  if(!hashLocal){
    location.hash = masterVersion[0];
    onInput(masterVersion[0], 'input');
  }else{
    onInput(hashLocal.substring(1), 'input');
  }
}

function setAll(){
  var hashLocal = location.hash.substring(1);
  onInput(hashLocal, 'all');
  // $(window).ready(function(){
  //   $('svg:g').attr('transform', 'matrix(1,0,0,0.41723018,0,1025.6749)');
  // })

}

range('cadra', 3000, 10000, 'height', 'css');
range('int', 1000, 3000, 'stroke-width', 'css');
range('ext', 1000, 3000, 'stroke-width', 'css');
// range('int', 10, 10, 'stroke-opacity', 'css');
// range('ext', 10, 10, 'stroke-opacity', 'css');
// range('soleil', 0, 120, 'fill-opacity', 'css');


$('.discount_credits').on('change mousemove', function() {
  extractRange(this);
});

localHash();


// $(window).ready(function(){
//     $('svg:g').attr('transform', 'matrix(1,0,0,0.41723018,0,1025.6749)');
// })

