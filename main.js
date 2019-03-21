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
				case 'Q':
				nresult[i] = 'Й';
				break;
			case 'W':
				nresult[i] = 'Ц';
				break;
			case 'E':
				nresult[i] = 'У';
				break;
			case 'R':
				nresult[i] = 'К';
				break;
			case 'T':
				nresult[i] = 'Е';
				break;
			case 'Y':
				nresult[i] = 'Н';
				break;
			case 'U':
				nresult[i] = 'Г';
				break;
			case 'I':
				nresult[i] = 'Ш';
				break;
			case 'O':
				nresult[i] = 'Щ';
				break;
			case 'P':
				nresult[i] = 'З';
				break;
			case '{':
				nresult[i] = 'Х';
				break;
			case '}':
				nresult[i] = 'Ї';
				break;
			case 'A':
				nresult[i] = 'Ф';
				break;
			case 'S':
				nresult[i] = 'І';
				break;
			case 'D':
				nresult[i] = 'В';
				break;
			case 'F':
				nresult[i] = 'А';
				break;
			case 'G':
				nresult[i] = 'П';
				break;
			case 'H':
				nresult[i] = 'Р';
				break;
			case 'J':
				nresult[i] = 'О';
				break;
			case 'K':
				nresult[i] = 'Л';
				break;
			case 'L':
				nresult[i] = 'Д';
				break;
			case ':':
				nresult[i] = 'Ж';
				break;
			case 'Z':
				nresult[i] = 'Я';
				break;
			case 'X':
				nresult[i] = 'Ч';
				break;
			case 'C':
				nresult[i] = 'С';
				break;
			case 'V':
				nresult[i] = 'М';
				break;
			case 'B':
				nresult[i] = 'И';
				break;
			case 'N':
				nresult[i] = 'Т';
				break;
			case 'M':
				nresult[i] = 'Ь';
				break;
			case '<':
				nresult[i] = 'Б';
				break;
			case '>':
				nresult[i] = 'Ю';
				break;
			default:
				nresult[i] = '?';
		}

	}

	console.log(nresult);


	result.textContent = nresult.join('');
	// console.log(input.value);

}