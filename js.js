var butUp = document.getElementById('upper');
var sub = document.getElementById('sub');
var space = document.getElementById('space');
var butChar = document.getElementById('char');

butChar.onclick =function () {
	var inputS = document.getElementById('inpS').value;
	var result = document.getElementById('result').innerHTML ="Result: " +inputS.length;	
}
butUp.onclick =function () {
	var inputS = document.getElementById('inpS').value;
	var result = document.getElementById('result').innerHTML ="Result: " +inputS.toUpperCase();
	

}
space.onclick =function () {
	var inputS = document.getElementById('inpS').value;
	var target =' ';
	var pos = -1;
	while ((pos = inputS.indexOf(target, pos + 1)) != -1) {
  	var result = document.getElementById('result').innerHTML ="Result: " + pos;
	}
}
sub.onclick = function () {
	var inputS = document.getElementById('inpS').value;
	var result = document.getElementById('result').innerHTML ="Result: " + inputS.substring(0,1);

}
var round = document.getElementById('round');
var random = document.getElementById('random');
var loc = document.getElementById('local');
var x = document.getElementById('x');


round.onclick = function () {
	var inputN = document.getElementById('inpN').value;
	var result = document.getElementById('resultN').innerHTML ="Result: " + Math.round(inputN);

}

random.onclick = function () {
	var inputN = document.getElementById('inpN').value;
	var result = document.getElementById('resultN').innerHTML ="Result: " + Math.random(inputN);

}
loc.onclick = function () {
	var inputN = document.getElementById('inpN').value;
	var result = document.getElementById('resultN').innerHTML ="Result: " + inputN.toLocaleString();

}
x.onclick = function () {
	var inputN = document.getElementById('inpN').value;
	var result = document.getElementById('resultN').innerHTML ="Result: " + Math.sqrt(inputN);

}


