//1 Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"

let gamburger = 3;
let fries = 1;

if(gamburger>=3 && fries>=1){
    console.log("Ми поїли")
}else {
    console.log("Ми йдемо в інше кафе")
}

//2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//Результат виводити в консоль.

let price = 1801;

if(price >=1000 && price<=1900){
    console.log("price: ", price)
}

//3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

let price2 = 1899;

if(price2 < 1000 || price2 != 1000 && price2 >= 1900){
    console.log("price2: ", price2)
}

//4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.
let poryRokuArray = ["Зима", "Весна", "Літо", "Осінь"]
let counter =2;

if(counter === 1){
    console.log(poryRokuArray[0]);
}else if(counter === 2){
    console.log(poryRokuArray[1]);
}else if(counter === 3){
    console.log(poryRokuArray[2]);
}else if(counter === 1){
    console.log(poryRokuArray[3]);
}

//5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

let a = 1;
let b = 2;
let c = 0;

if(a>b && b>c || c>b && b>a ){
    console.log("b : ",b);
}else if(b>a && a>c || c>a && a>b){
    console.log("a : ",a);
}else if(b>c && c>a || a>c && c>b){
    console.log("c : ",c)
}else{
    console.log("Присутні однакові цифри")
}

// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

let number = 9;

switch (number) {
    case 1:
        console.log( 'Понеділок' );
        break;
    case 2:
        console.log( 'Вівторок' );
        break;
    case 3:
        console.log( 'Середа' );
        break;
    case 4:
        console.log( 'Четвер' );
        break;
    case 5:
        console.log( 'П*ятничка' );
        break;
    case 6:
        console.log( 'Субота' );
        break;
    case 7:
        console.log( 'Неділя' );
        break;
    default:
        console.log( "Немає такого дня" );
}

//
// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

let operator = "/";
//2 ? 4
switch (operator) {
    case "*":
        console.log(2 * 4);
        break;
    case "+":
        console.log(2 + 4);
        break;
    case "-":
        console.log(2 - 4);
        break;
    case "/":
        console.log(2 / 4);
        break;
}

//8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
const str = 'Sasha Shapoval';

const result = str.replace(/[aeiou]/gi, '');
console.log(result)

//9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закнченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.
//
//     Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
//     https://www.kyivdictionary.com/uk/words/conjugation/?word=%D0%BC%D0%B5%D1%82%D1%80&lang=uk
// */

let metr = 1000;

sdcdsdsdcsdcdscdscdsc