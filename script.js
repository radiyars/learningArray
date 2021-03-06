//? Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

//*  вариатнт решения:
// вариант решения:
// function camelize(str) {
// 	return str
// 	  .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
// 	  .map(
// 		// Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
// 		// превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
// 		(word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
// 	  )
// 	  .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
//   }
//*******************


function camelize(str) {
	let arrStr = str.split('');
	for (let i = 0; i < arrStr.length; i++) {
		if (arrStr[i] === '-') {
			arrStr.splice(i, 1);
			if (i < arrStr.length) {
				arrStr[i] = arrStr[i].toUpperCase();
			}
			i--;
		}
	}
	return arrStr.join('');
}

console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));
console.log('---------------------------------------');


//? Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)


//*  вариатнт решения:
// function filterRange(arr, a, b) {
// 	// добавлены скобки вокруг выражения для улучшения читабельности
// 	return arr.filter(item => (a <= item && item <= b));
//   }
//*******************


function filterRange(arr, a, b) {
	let arrOut = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= a && arr[i] <= b) {
			arrOut.push(arr[i]);
		}
	}
	return arrOut
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr);
console.log('---------------------------------------');


//? Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]

function filterRangeInPlace(arr, a, b) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < a || arr[i] > b) {
			arr.splice(i, 1);
			i--
		};
	}
}

let arr3 = [5, 3, 8, 1];
filterRangeInPlace(arr3, 1, 4); // удалены числа вне диапазона 1..4
console.log(arr3);
console.log('---------------------------------------');


//?_(4)_Сортировать в порядке по убыванию
let arr4 = [5, 2, 1, -10, 8];
arr4.sort((a, b) => b - a);
console.log(arr4);
console.log('---------------------------------------');


//?_(5)_Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

// Пример использования:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10


// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.


function Calculator() {
	this.methods = {
		"-": (a, b) => a - b,
		"+": (a, b) => a + b
	}
	this.calculate = function (str) {
		arrStr = str.split(' ');
		a = +arrStr[0];
		b = +arrStr[2];
		operation = arrStr[1];
		return this.methods[operation](a, b);
	};
	this.addMethod = function (name, func) {
		this.methods[name] = func;
	}
};


let calc = new Calculator;
console.log(calc.calculate("3 + 7")); // 10


let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log((result)); // 8
console.log('---------------------------------------');


//?_(6)_У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(item => item.name)

console.log(names);
console.log('---------------------------------------');


//?_(7)_У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// Например:

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = /* ... ваш код ... */

// 
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// 

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин
// Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.


let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [vasya1, petya1, masha1];

let usersMapped = users1.map(item => {
	item.fullName = item.name + ' ' + item.surname
	item.id = item.id;
	delete item.name;
	delete item.surname;
	return item
});

//* вариант решения:
// let usersMapped = users1.map(user => ({
// 	fullName: `${user.name} ${user.surname}`,
// 	id: user.id
// }));
//*-----------------

console.log(usersMapped);
console.log('---------------------------------------');


//?_8_Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя


let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };

let arr2 = [vasya, petya, masha];

function sortByAge(arr) {
	arr.sort((a, b) => a.age - b.age);
	// arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

sortByAge(arr2)

console.log(arr2[0].name); // Вася
console.log(arr2[1].name); // Маша
console.log(arr2[2].name); // Петя
console.log('---------------------------------------');


//?_9_Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
// решение


let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 29 };

let arr5 = [vasya, petya, masha];

function getAverageAge(users) {
	return Math.round(users.reduce(function (sum, current) { return sum + current.age }, 0) / users.length);
}

console.log(getAverageAge(arr5));
console.log('---------------------------------------');


//?_10_Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

// function unique(arr) {
//   /* ваш код */
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert( unique(strings) ); // кришна, харе, :-O


function unique(arr) {
	let result = [];

	for (let str of arr) {
		if (!result.includes(str)) {
			result.push(str);
		}
	}

	return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O
