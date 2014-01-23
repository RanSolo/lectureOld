$(document).ready(initialize);

function initialize(){
  $('#add-color').click(clickAddColor); 
  $('#colors').on('click', '.color', clickSelectColor);
}

function clickSelectColor(){
  alert('hey')
}
function clickAddColor(){
  var color = $('#color-text').val()
  $('#color-text').val('');
  $('#color-text').focus();

  var $box = $('<div>');
  $box.addClass('color');
  $box.css('background-color', color);
  $('#colors').prepend($box);

}

