var i = 0;
var taa = ['bien', 'oui'];
var table = {
  "a": "a",
  "b": "b",
  "1": "one",
};
$.each( table, function( key, value ) {
  // $('div').load('simple/'+value+'svg');
  $('div').load('simple/'+value+'.svg');
});
