$(document).ready(initialize);

function initialize(){
    $('.number').click(displayNumber);
    $('.operator').click(compute);
    $('#sign').click(changeSign);
    $('#push').click(pushToQue);
    $('#clear').click(compute);
    $('#pow').click(compute)
}

function compute(){
     var operator =  this.id;
     var $lis = $('#que li');
     var number = parseTags($lis);
     var result;

     switch (operator){
       case 'add':
        result =  number[0] + number[1];
        break;
     case 'sub':
        result =  number[1] - number[0];
          break;
      case 'mul':
        result = number[0] * [1];
          break;
     case 'div':
        result = number[1] / [0];
          break;
     case 'pow':
        result = Math.pow(number[1], number[0]); 
}
    $('#answer').text(result);
    $('#que').empty();
}
function pushToQue(){
    var display = $('#answer').text();
    $('#answer').text('0');
    var $li = $('<li>');
    $li.text(display);
    $('#que').prepend($li);
}

function displayNumber(){
    var display = $('#answer').text();
    var current = this.value;
    var output;

    if(current === '.' && containsChar(display, '.')) return;
    
    if(display === '0' && current !== '.')
      output = current;
    else
      output = display + current;
    
    $('#answer').text(output);
}

function changeSign(){
    var number = $('#answer').text();
    number *= -1;
    $('#answer').text(number);
}
