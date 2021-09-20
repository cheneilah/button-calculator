var textArea = document.querySelector("input");

function handleclick(n){
  audio1.play();
  textArea.value += n;
};

function addition(){
  audio2.play();
  textArea.value += document.getElementById("plus").innerHTML;
};

function substract(){
  audio2.play();
  textArea.value += document.getElementById("minus").innerHTML;
};

function equal(){
  audio3.play();
  var equation = textArea.value;
  var result = eval(equation);
  $('.content-square').slideUp(200);
  $('#answer').html(result);
  $('.answer-square').css("visibility", "visible");
};

var audio1 = new Audio('numbers.mp3');
var audio2 = new Audio('operators.mp3');
var audio3 = new Audio('office-calculator-single-button-press.mp3');
