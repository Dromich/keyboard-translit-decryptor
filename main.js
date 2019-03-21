let input = document.getElementById('main_input');
let btn = document.getElementById('start_btn');
let result = document.getElementById('main_result');


btn.addEventListener('click', goResult, false);


function goResult(params) {
let crypto = input.value;
let nresult = [];
for (var i = 0; i < crypto.length; i++) {
	switch (crypto.charAt(i)) {
		case 'h':
		nresult[i]= 'р'; 
		  break;
		  case 'j':
		  nresult[i]= 'о'; ;
			break;
			case 'v':
			nresult[i]= 'м'; ;
			  break;
			  case 'f':
			  nresult[i]= 'а'; ;
				break;
		// 		case 'h':
		// nresult[i]= 'р'; ;
		//   break;
		//   case 'h':
		// nresult[i]= 'р'; ;
		//   break;
		//   case 'h':
		// nresult[i]= 'р'; ;
		//   break;
		default:
		nresult[i]= '?';
	  }
	//   nresult[i]=crypto.charAt(i);
    // console.log(crypto.charAt(i));
}

console.log(nresult);


	 result.textContent = nresult.join('');
	// console.log(input.value);
	
}