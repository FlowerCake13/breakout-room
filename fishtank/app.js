window.onload = function(){
	var fish = document.getElementById('fish')
	var arrX = [];

	window.onmousemove = function(event) {
		console.log("The mouse has moved!");
		var x = event.clientX;
		var y = event.clientY;

		fish.style.left = x + 'px';
		fish.style.top = y + 'px'; 

		arrX.push(x);
		// console.log(arrX[1] + arrX[0])
		if (arrX.length == 3) {
			arrX.shift();
		}
		if (arrX[0] < arrX[1]) {
			fish.src = 'imgs/right1.png'
			console.log('right')
		}
		if (arrX[0] > arrX[1]) {
			console.log('left')
			fish.src = 'imgs/left1.png'
		}
	}
}