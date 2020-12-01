function getCase(str) {
	if (str.toUpperCase() === str) {
		return "upper"
	} else if (str.toLowerCase() === str) {
		return "lower"
	} else {
		return "mixed"
	}
}


const getCase = s =>
 s == s.toUpperCase() ? 'upper':
 s == s.toLowerCase() ? 'lower' : 'mixed';


 const getCase = str => ["", "lower", "upper", "mixed"][/[a-z]/.test(str) + /[A-Z]/.test(str) * 2];


 function getCase(str) {
	return str.toLowerCase()===str ? 'lower' : str===str.toUpperCase() ? 'upper' : 'mixed'
}


function parseArray(arr) {
	return arr.map(String);
}


const createID = (first, last) => first[0].toLowerCase() + last[0].toUpperCase() + last.slice(1, 3).toLowerCase();


function jayAndBob(str) {
	let string = "grams";
	if(str=="half"){
		return "14 grams";
	}else if(str=="quarter"){
		return "7 grams";
	}else if(str=="eighth"){
		return "3.5 grams"
	}else if(str=="sixteenth"){
		return "1.75 grams"
	}
}

function jayAndBob(str) {
	var obj = {
		"half": "14 grams",
		"quarter": "7 grams",
		"eighth": "3.5 grams",
		"sixteenth": "1.75 grams"
	}
	return obj[str]
}

const jayAndBob = s => 28 / {h:2, q:4, e:8, s:16}[s[0]] + ' grams';

function jayAndBob(str) {
	// 420blazeit
	const weights = { whole: "28", half: "14", quarter: "7", eighth: "3.5", sixteenth: "1.75" };
	return `${weights[str]} grams`;
}

function jayAndBob(str) {
  return (28 / [2, 4, 8, 16][['half', 'quarter', 'eighth', 'sixteenth'].indexOf(str)]) + ' grams'
}

function jayAndBob(str) {
	return `${str=='half'?14
	:str=='quarter'?7
	:str=='eighth'?3.5
	:1.75} grams`
}

function jayAndBob(str) {
	const values = {
		half: 14,
		quarter: 7,
		eighth: 3.5,
		sixteenth: 1.75,
	}

	return `${values[str]} grams`
}

function skipTooMuchSugarDrinks(drinks) {
	return drinks.filter(drink => drink!=='cola' && drink!=='fanta')
}

function skipTooMuchSugarDrinks(drinks) {
	return drinks.filter(d => !['cola', 'fanta'].includes(d))
}


function error(n) {
	return (n === 1 ? 'Check the fan: e1' : n === 2 ? 'Emergency stop: e2' :  n === 3 ? 'Pump Error: e3' : n === 4 ? 'c: e4' : n === 5 ? 'Temperature Sensor Error: e5' : 101)
}

function error(n) {
	return {
		1: 'Check the fan: e1',
		2: 'Emergency stop: e2',
		3: 'Pump Error: e3',
		4: 'c: e4',
		5: 'Temperature Sensor Error: e5',
	}[n] || 101
}

function error(n) {
  return [
    "",
    "Check the fan: e1",
    "Emergency stop: e2",
    "Pump Error: e3",
    "c: e4",
    "Temperature Sensor Error: e5"
  ][n] || 101;
}


function sayHelloBye(name, num) {
	if(num ===1){
		return "Hello " +  name.charAt(0).toUpperCase() + name.slice(1);
	}else{
		return "Bye " +  name.charAt(0).toUpperCase() + name.slice(1);
	}
}


// Find the Bug: Returning the Container
function getContainer(product) {
	let container
  switch (product) {
		case "Bread":
			return "bag"
			break;
		case "Beer":
		case "Milk":
			return "bottle"
			break;
		case "Cerials":
			return "box"
			break;
		case "Eggs":
			return "carton"
			break;
		case "Candy":
			return "plastic"
			break;
		default:
			return null
	}
}


function areTrue(a, b) {
	if (a == true && b == true) {
			return "both";
		}else if(a == true) {
			return "first";
		}else if (b == true) {
		return "second";
	  }else {
		return "neither";
	}
}


function isPlural(word) {
	return word.endsWith('s');
}


function areaShape(base, height, shape) {
	if(shape == 'triangle') {
		return 0.5 * base * height;
	}else if(shape == 'parallelogram'){
		return base * height;
	}else{
		return 'broseph';
	}
		
}

function isLastCharacterN(word) {
	return word.endsWith('n')
}


function isInRange(num, range) {
	if (num>=range.min && num<=range.max){
		return true;
	} else {
		return false;
	} 
}


function programmers(one, two, three) {
	return Math.max(...arguments) - Math.min(...arguments)
}

function programmers(one, two, three) {
	return Math.max(three,two,one) - Math.min(one, two)
}

function programmers(one, two, three) {
	let max = Math.max(one,two,three);
	let min = Math.min(one,two,three);
	return max - min;
}

function countDs(sentence) {
 let a = 0;
	for(let i = 0; i< sentence.length; i++){
	if(sentence[i]==='D' || sentence[i]==='d'){
			a++;
	}
}
	return a;
}

function isTriangle(a, b, c) {
	return (a+b)>c && (a+c)>b && (b+c)>a;
}

function countClaps(str) {
	const regex = /[C]/gi;
	return str.match(regex).length;
}

const wumbo = str => str.replace(/M/g, 'W');


function wumbo(words) {
	return words.replace(/M/g, "W");
}

function wumbo(words) {
if(words.indexOf('M')===-1){
		return words;
	}else{
		return wumbo(words.replace('M','W'))
	}
}


function notShare(arr1, arr2) {
for (let i of arr1) {
    for (let j of arr2) {
      if (i === j) return false;
    }
  }
  return true;
}