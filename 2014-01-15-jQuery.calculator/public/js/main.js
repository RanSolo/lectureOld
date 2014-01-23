(document).ready(initialize);

function initialize(){
$('#calc').click(calculate);
$('#clear').click(clear);
$('#sum').click(sum);
$('#product').click(product);

}

function sum(){
  var s = 0;

  $('.numbers').each(function(index, element){
     s += parseFloat(element.value); 
  });
     $('#result').text(s);
}








function clear(){
  $('#num1').val('');
  $('#num1').focus();
  $('#num2').val('');
  $('#op').val('');
  $('#result').text('');
  $('#int1').val('');
  $('#int2').val('');
  $('#int3').val('');
  $('#int4').val('');
  $('#int5').val('');
  $('#result2').text('');

}
function calculate(){
  var num1 = $('#num1').val();
  num1 = parseFloat(num1);
  var num2 = $('#num2').val();
  num2 = parseFloat(num2);
  var op = $('#op').val();

  var result = compute(num1, num2, op);
  $('#result').text(result); 
} 

function compute(x, y, operator){
    var result;
  switch(operator){
    case '+':
     result = x + y;
     break;
    case  '-':
     result = x - y;
     break;
    case  '/':
     result = x / y;
     break;
    case  '*':
     result = x * y;
  }
  return result;
}

function parseIt(){
  var int1 = $('#int1').val();
  int1 = parseFloat(int1);
  var int2 = $('#int2').val();
  int2 = parseFloat(int2);
  var int3 = $('#int3').val();
  int3 = parseFloat(int3);
  var int4 = $('#int4').val();
  int4 = parseFloat(int4);
  var int5 = $('#int5').val();
  int5 = parseFloat(int5);

  var result2 = parseIt(int1 + int2 + int3 + int4 + int5);
  $('#result2').text(result2); 
  return result2;
  console.log(result2);
}
  =
