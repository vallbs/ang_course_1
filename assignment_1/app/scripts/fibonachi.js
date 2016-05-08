var f0 = 0;
var f1 = 1;
var fib = function(n) {

	if(n === 1) {
		return f0;
	}
	if(n === 2) {
		return f1;
	}

	else {
		return recFib(n-2, f1, f0);
	}

}

var recFib =  function(curCounter, minusOneNum, minusTwoNum) {
	if(curCounter>0) {
		curCounter -= 1;
		var curNum = minusOneNum + minusTwoNum;
		return recFib(curCounter, curNum, minusOneNum);
	}
	else {
		return minusOneNum;
	}
}

console.log(fib(10))