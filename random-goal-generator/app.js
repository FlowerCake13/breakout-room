var goal = document.getElementById('text');
var button = document.getElementById('button');

var categories = ['category1', 'category2', 'category3']
var category0 = ['goal1', 'goal2', 'goal3'];
var category1 = ['goal1', 'goal2', 'goal3'];
var category2 = ['goal1', 'goal2', 'goal3'];

var counter = 0;
button.addEventListener('click', function(){
	if(counter == 0){
		goal.innerHTML = categories[Math.floor(Math.random() * categories.length)]
		counter++

	}else{
		goal.innerHTML = category1[Math.floor(Math.random() * category1.length)]
		counter--
	}
})