$(document).ready(initialize);

function initialize(){
  $('#add-color').click(clickAddColor); 
  $('#colors').on('click', '.color', clickSelectColor);
  $('#add-pixels').click(clickAddPixels);
  $('#pixels').on('hover', '.pixel', hoverColorPixel);
}
    
function hoverColorPixel(){
var color = $('selected').css('background-color');
$(this).css('background=color', color);
}

function clickAddPixels(){
    var num = $('#number-text'.val();
    num = parseInt(num);

    for(var i = 0; i < num; i++){
    var $pixel = $('<div>')}
    $pixel.addClass($pixel);
    
}
function clickSelectColor(){
   if($(this).hasClass('selected')){
   $(this).removeClass('selected');
   } else {
      $('color').removeClass('selected');
      $(this).addClass('selected');
   }
   }
function clickSelectColor(){
}

function clickAddColor(){
  var color = $('#color-text').val();
  $('#color-text').val('');
  $('#color-text').focus();

  var $box = $('<div>');
  $box.addClass('color');
  $box.css('background-color', color);
  $('#colors').prepend($box);
}



