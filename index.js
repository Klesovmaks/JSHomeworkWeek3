//#1 Фильтрация строки
//Создать переменную со строковым значением. Сформировать переменную которая будет состоять только из ГЛАСНЫХ букв этой строки. Результат вывести в консоль.
const string = "Привет! Как дела?";

const getVowels = (values) => {
  return Array.from(values).filter(value => "аяуюоеёэиы".includes(value)).toString();
} 

console.log(`Задание #1 Фильтрация строки - ${getVowels(string)}`);

//#2 Выборка обьекта
/* Сформировать произвольный массив объектов, описывающий, например, работников компании, в каждом объекте должны содержаться сл. свойства (поля) - name (содержащее имя сотрудника) и поле salary (содержащее зарплату сотрудника от 0 до 3000). Сформировать функцию в которую будет передан в качестве аргумента этот массив и возвращен из функции массив содержащий имена всех сотрудников, чья зарплата превышает 1000. */
const workers = [
  {"name": "John","salary": 500},
  {"name": "Mike","salary": 1300},
  {"name": "Linda","salary": 1500}
];

const getWorthyWorkers = (values) => {
  const newArray = [];
  for (let i = 0; i < values.length; ++i) {
    if(values[i].salary > 1000){
      newArray.push(values[i].name);
    }
  }

  return newArray;
}

console.log(`Задание #2 Выборка объекта - ${getWorthyWorkers(workers)}`);

//#3 Анализ строки
//Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла. Функция должна возвращать true или false в зависимости от того есть у этого файла расширение html или нет.
const pathOne = "/path/test.html";
const pathTwo = "/path/test.js"

const isHtml = (values) => {
  const res = values.slice(-4);
  
  if(res === "html") {
    return true;
  }
  return false;
}

console.log(`Задание #3 Анализ строки. test.html - ${isHtml(pathOne)}. test.js - ${isHtml(pathTwo)}`);

//#4 Фильтрация строки
/*
Создайте функцию которая в качестве аргумента принимает целое число, и проверяет четное оно или нет. Затем создайте произвольный массив целых чисел. И используя функцию проверки числа на четность, создайте из готового массива новый, который будет содержать только четные числа. Результат выведите в консоль.
 */
const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = (num) => {
  if(num%2 == 0) {
    return num;
  }
  return undefined;
};

const filterArray = (arr, num) => {
  const newArray = arr.filter(i => i%num === 0 );
  return newArray;
}

console.log(`Задание #4 Фильтрация строки. Результат, при условии четного значение в функции "isEven" - ${filterArray(mixedArray, isEven(2))}. Значение "isEven" не четное - ${isEven(3)}`);