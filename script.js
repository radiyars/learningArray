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


//? 4 Сортировать в порядке по убыванию
let arr4 = [5, 2, 1, -10, 8];
arr4.sort((a, b) => b - a);
console.log(arr4);


