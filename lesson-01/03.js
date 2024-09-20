Имея в распоряжении только:

// ​let number = 1;
// и используя лишь
// --number   number--  ++number   number++
// Получи в консоли 1,3,3,1 
// ❗Нужно вызвать консоль ЧЕТЫРЕ раза
// Пример:
// console.log(number**); 
// console.log(**number); 
// console.log(number**); 
// console.log(**number); 

let number = 1;

console.log(number++); // Выведет 1, затем number станет 2
console.log(++number); // Сначала увеличит до 3, затем выведет 3
console.log(number--); // Выведет 3, затем number станет 2
console.log(--number); // Сначала уменьшит до 1, затем выведет 1
