var masterVersion = ['expanded', 'condensed'];
var viewSet = false;


function surMesure(){

  $(window).ready(function(){
    // $('path').css('stroke-linecap', 'round');
   // $('path').css('stroke-linecap', 'round');
    // var strokeInt = $('.ext');
    $('path').css('stroke-linejoin', 'bevel');
  // $('path.int').remove();
    // $('path.ext').css('transform', 'scale(1.1, 1 )');
    // $('path.int').css('transform-origin', 'center');
    // strokeInt.each(function(){
        // alert('d');
        // var stStroke = $(this).attr('d');
        // var stStroke = stStroke.replace('v', 'z');
        // var stStroke = stStroke.replace('L', 'l');
        // var stStroke = stStroke.replace('1', '9');
      //   var stStroke = stStroke.replace('0', '666');
      //   $(this).attr('d', stStroke);
      // })
  })

}




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
          'data-switch': 'off'
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

  surMesure();
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
  surMesure();
}

function setAll(){
  var hashLocal = location.hash.substring(1);
  onInput(hashLocal, 'all');
  surMesure();
}

function metricDialog (){
  $('.cadra svg').click( function(){
    // $('.metricDialog').remove();
    var CadraParent = $(this).parent();
    if(CadraParent.attr('data-switch') == 'off'){
      CadraParent.attr('data-switch', 'on');

      var widthCadra = $(this).attr('width');


      CadraParent.toggleClass('activate');
      
      CadraParent.prepend($('<div/>', {
        class: 'metricDialog',
        width: CadraParent.width()
      }));
      var dialogMetric = CadraParent.find('.metricDialog');
      
      dialogMetric.append($('<input />',{
        type: 'range',
        width: '100%',
        min: '0',
        max: '2000',
        value: widthCadra
      }));
      $('.metricDialog input').on('change mousemove', function(){
        var startValue = $(this).val();
        var svgCible = $(this).parent().next('svg');

        svgCible.attr('width', startValue);
      });
    } else {
      $(CadraParent).attr('data-switch', 'off')
      CadraParent.find('.metricDialog').remove();
    }
  })

  // $('.cadra svg').mouseout( function(){
  //   $(this).parent().find('.metricDialog').remove();
  // })

}
$(window).ready(function(){
  metricDialog();
})

range('cadra', 3000, 10000, 'height', 'css');
range('int', 1000, 3000, 'stroke-width', 'css');
range('ext', 1000, 3000, 'stroke-width', 'css');
// range('int', 10, 10, 'stroke-opacity', 'css');
// range('ext', 10, 10, 'stroke-opacity', 'css');
// range('soleil', 0, 120, 'fill-opacity', 'css');


$('.discount_credits').on('change mousemove', function() {
  extractRange(this);
  // $('path.int').remove();
});

localHash();

