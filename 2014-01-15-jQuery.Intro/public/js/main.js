$(document).ready(initialize);

function initialize(){
    $('h1').css('color', 'red');
    $('h1').css('font-size', '20px');
    var currentH1Text = $('h1').text();
    console.log(currentH1Text);

  $('h1').text('Welcome to Javascript');
  $('div').css('color', '#ff00ff');
  $('#d2').css('font-size', '11px');
  $('#d3').css('background-color','yellow');
  $('.c1').css('font-family','monospace')
  $('.c1').css({'color':'green', 'background-color':'red'}).text('Randy');
  var bgcolor = prompt('What background color do you want?');
  $('#d3').css('background-color',bgcolor);
  var userText = prompt('What do you want me to say');
  $('#d3').text(userText);


  var numPs =  $('.cp').length
    console.log(numPs);


}


