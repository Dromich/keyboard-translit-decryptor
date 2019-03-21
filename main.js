let input = document.getElementById('main_input');
let btn = document.getElementById('start_btn');
let result = document.getElementById('main_result');


btn.addEventListener('click', goResult, false);


function goResult(params) {
	result.textContent = input.value;
	console.log(input.value);
	
}