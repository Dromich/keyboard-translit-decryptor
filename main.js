let input = document.getElementById('main_input');
let btn = document.getElementById('start_btn');
let result = document.getElementById('main_result');


btn.addEventListener('click', goResult, false);


function goResult() {
	let crypto = input.value;
	let nresult = [];
	for (var i = 0; i < crypto.length; i++) {
		switch (crypto.charAt(i)) {
			case 'q':
				nresult[i] = 'й';
				break;
			case 'w':
				nresult[i] = 'ц';
				break;
			case 'e':
				nresult[i] = 'у';
				break;
			case 'r':
				nresult[i] = 'к';
				break;
			case 't':
				nresult[i] = 'е';
				break;
			case 'y':
				nresult[i] = 'н';
				break;
			case 'u':
				nresult[i] = 'г';
				break;
			case 'i':
				nresult[i] = 'ш';
				break;
			case 'o':
				nresult[i] = 'щ';
				break;
			case 'p':
				nresult[i] = 'з';
				break;
			case '[':
				nresult[i] = 'х';
				break;
			case ']':
				nresult[i] = 'ї';
				break;
			case 'a':
				nresult[i] = 'ф';
				break;
			case 's':
				nresult[i] = 'і';
				break;
			case 'd':
				nresult[i] = 'в';
				break;
			case 'f':
				nresult[i] = 'а';
				break;
			case 'g':
				nresult[i] = 'п';
				break;
			case 'h':
				nresult[i] = 'р';
				break;
			case 'j':
				nresult[i] = 'о';
				break;
			case 'k':
				nresult[i] = 'л';
				break;
			case 'l':
				nresult[i] = 'д';
				break;
			case ';':
				nresult[i] = 'ж';
				break;
			case 'z':
				nresult[i] = 'я';
				break;
			case 'x':
				nresult[i] = 'ч';
				break;
			case 'c':
				nresult[i] = 'с';
				break;
			case 'v':
				nresult[i] = 'м';
				break;
			case 'b':
				nresult[i] = 'и';
				break;
			case 'n':
				nresult[i] = 'т';
				break;
			case 'm':
				nresult[i] = 'ь';
				break;
			case ',':
				nresult[i] = 'б';
				break;
			case '.':
				nresult[i] = 'ю';
				break;
			default:
				nresult[i] = '?';
		}

	}

	console.log(nresult);


	result.textContent = nresult.join('');
	// console.log(input.value);

}