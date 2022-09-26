//1 Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"


function mcDonalds(gamburger,fries ) {
    if (gamburger >= 3 && fries >= 1) {
        console.log("Ми поїли")
    } else {
        console.log("Ми йдемо в інше кафе")
    }
}

mcDonalds(2,1);

//2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//Результат виводити в консоль.

function inPrice(price ) {

    if (price >= 1000 && price <= 1900) {
        console.log("price: ", price)
    }
}
inPrice(2000);

//3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

function outPrice(price2) {


    if (price2 < 1000 || price2 != 1000 && price2 >= 1900) {
        console.log("price2: ", price2)
    }
}
outPrice(999)
//4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.
function poraRoku(number) {
    let poryRokuArray = ["Зима", "Весна", "Літо", "Осінь"]

    if (number === 1) {
        console.log(poryRokuArray[0]);
    } else if (number === 2) {
        console.log(poryRokuArray[1]);
    } else if (number === 3) {
        console.log(poryRokuArray[2]);
    } else if (number === 1) {
        console.log(poryRokuArray[3]);
    }
}
poraRoku(2)

//5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

function numbers(a, b, c) {

if(a>b && b>c || c>b && b>a ){
    console.log("b : ",b);
}else if(b>a && a>c || c>a && a>b){
    console.log("a : ",a);
}else if(b>c && c>a || a>c && c>b){
    console.log("c : ",c)
}else{
    console.log("Присутні однакові цифри")
}
}
numbers(1,2,3)

// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

function day(number) {

    switch (number) {
        case 1:
            console.log('Понеділок');
            break;
        case 2:
            console.log('Вівторок');
            break;
        case 3:
            console.log('Середа');
            break;
        case 4:
            console.log('Четвер');
            break;
        case 5:
            console.log('П*ятничка');
            break;
        case 6:
            console.log('Субота');
            break;
        case 7:
            console.log('Неділя');
            break;
        default:
            console.log("Немає такого дня");
    }
}
day(3);
//
// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

function operation(number1, number2, operator) {

    switch (operator) {
        case "*":
            console.log(number1 * number2);
            break;
        case "+":
            console.log(number1 + number2);
            break;
        case "-":
            console.log(number1 - number2);
            break;
        case "/":
            console.log(number1 / number2);
            break;
    }
}
operation(4,2,'*')
//8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
function deleteGolosni(str) {

    const result = str.replace(/[aeiou]/gi, '');
    console.log(result)
}
deleteGolosni("Oleksandr Shapoval")

//9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закнченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.
//
//     Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
//     https://www.kyivdictionary.com/uk/words/conjugation/?word=%D0%BC%D0%B5%D1%82%D1%80&lang=uk
// */
function metrKilometr(metr) {

    let km = metr / 1000;
    let metrEnd = `${metr}`[`${metr}`.length - 1]
    let kmEnd = `${km}`[`${km}`.length - 1]

    if (Number(metrEnd) === 1) {
        console.log(`${metr} метр- це ${km} кілометра`)
    } else if (Number(metrEnd) === 2 || Number(metrEnd) === 3 || Number(metrEnd) === 4) {
        console.log(`${metr} метра- це ${km} кілометра`)
    } else if (Number.isInteger(km) === false && km != 1 || km === 2 || km === 3 || km === 4 && Number(metrEnd) === 0 || Number(metrEnd) === 5 || Number(metrEnd) === 6 || Number(metrEnd) === 7 || Number(metrEnd) === 8 || Number(metrEnd) === 9) {
        console.log(`${metr} метрів- це ${km} кілометра`)
    } else if (Number.isInteger(km) && km != 1 || km === 0 || km === 5 || km === 6 || km === 7 || km === 8 || km === 9 && Number(metrEnd) === 0 || Number(metrEnd) === 5 || Number(metrEnd) === 6 || Number(metrEnd) === 7 || Number(metrEnd) === 8 || Number(metrEnd) === 9) {
        console.log(`${metr} метрів- це ${km} кілометрів`)
    } else if (km === 1) {
        console.log(`${metr} метрів- це ${km} кілометр`)
    }
}
metrKilometr(1555)

