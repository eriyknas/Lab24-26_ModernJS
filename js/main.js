// console.log("=== Деструктуризация массивов ===");
// const colors = ["red", "green", "blue"];

// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1, color2);

// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);

// const [primary, , tertiary] = colors;
// console.log(primary, tertiary);

// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4);


// console.log("Деструктуризация объектов");
// const user = {
//     name: "Алиса",
//     age: 25,
//     city: "Москва"
// };

// const userName = user.name;
// const userAge = user.age;
// console.log(userName, userAge);

// const { name, age, city } = user;
// console.log(name, age, city);

// const { name: fullName, age: years } = user;
// console.log(fullName, years);

// const { name: personName, country = "Россия" } = user;
// console.log(personName, country);


// console.log("Деструктуризация в параметрах");

// function printUserOld(user) {
//     console.log(`Имя: ${user.name}`);
//     console.log(`Возраст: ${user.age}`);
//     console.log(`Город: ${user.city}`);
// }

// function printUser({ name, age, city }) {
//     console.log(`Имя: ${name}`);
//     console.log(`Возраст: ${age}`);
//     console.log(`Город: ${city}`);
// }

// printUserOld(user);
// console.log();
// printUser(user);


// console.log("Практическое задание");
// const product = {
//     name: "Ноутбук Apple MacBook Air",
//     price: 99999,
//     category: "Электроника",
//     inStock: true
// };

// const { name: productName, 
//     price: productPrice, 
//     category: productCategory, 
//     inStock: productInStock } = product;
// console.log("Извлеченные свойства продукта:");
// console.log(`Название: ${productName}`);
// console.log(`Цена: ${productPrice}₽`);
// console.log(`Категория: ${productCategory}`);
// console.log(`В наличии: ${productInStock ? "Да" : "Нет"}`);

// function printProduct({ name, price, category, inStock }) {
//     console.log("\nИнформация о продукте:");
//     console.log(`${name}`);
//     console.log(`Цена: ${price}₽`);
//     console.log(`Категория: ${category}`);
//     console.log(`В наличии: ${inStock ? "Есть" : "Нет"}`);
// }

// printProduct(product);


// console.log("Spread оператор для массивов");
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combined = [...arr1, ...arr2];
// console.log("Объединённый массив:", combined);

// const copy = [...arr1];
// console.log("Копия массива:", copy);

// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив:", extended);


// console.log("Spread оператор для объектов");

// const person = {
//     name: "Иван",
//     age: 30
// };

// const address = {
//     city: "Санкт-Петербург",
//     street: "Невский проспект"
// };

// const fullInfo = { ...person, ...address };
// console.log("Полная информация:", fullInfo);

// const personCopy = { ...person };
// console.log("Копия объекта:", personCopy);

// const updated = { ...person, age: 31, occupation: "Developer" };
// console.log("Обновлённый объект:", updated);


// console.log("Rest оператор");

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log("Сумма 1,2,3:", sum(1, 2, 3));
// console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));

// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);


// console.log("Практическое задание");

// const array1 = [1, 3, 5, 7, 9];
// const array2 = [2, 4, 6, 8, 10];

// const mergedArray = [...array1, ...array2];
// console.log("Объединенные массивы:", mergedArray);

// function findMax(...numbers) {
//     if (numbers.length === 0) return null;
//     return Math.max(...numbers);
// }

// console.log("Максимум из 5, 12, 8, 3:", findMax(5, 12, 8, 3));
// console.log("Максимум из 100, 250, 175:", findMax(100, 250, 175));

// const car = {
//     brand: "Tesla",
//     model: "Model 3"
// };

// const specs = {
//     range: "500km",
//     acceleration: "3.3s"
// };

// const fullCar = { ...car, ...specs };
// console.log("Объединенный объект автомобиля:", fullCar);

// import { greet, add, PI } from './utils.js';

// console.log("Модули");
// console.log(greet("Алексей"));
// console.log("5 + 3 =", add(5, 3));
// console.log("Значение PI:", PI);

// import { multiply as умножить } from './utils.js';
// console.log("4 * 7 =", умножить(4, 7));

// import * as Utils from "./utils.js";
// console.log(Utils.greet("Мария"));
// console.log("Умножение:", Utils.multiply(3, 9));

// import { square, cube, E } from './math.js';
// console.log("Квадрат числа 7:", square(7));
// console.log("Куб числа 5:", cube(5));
// console.log("Число E =", E);


// console.log("Промисы");
// const simplePromise = new Promise((resolve, reject) => {
//     const success = true;
//         if (success) {
//             resolve("Операция выполнена успешно!");
//         } else {
//             reject("Произошла ошибка!");
//         }
// });

// simplePromise
//     .then((result) => console.log("Результат:", result))
//     .catch((error) => console.log("Ошибка:", error));

// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Прошло ${ms} миллисекунд`);
//         }, ms);
//     });
// }

// delay(1000)
//     .then((message) => console.log(message));

// function fetchUserData(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId > 0) {
//                 resolve({
//                     id: userId,
//                     name: "Чешуина Анастасия",
//                     email: "anastasia9cheshuina@yandex.ru"
//                 });
//             } else {
//                 reject("Неверный ID пользователя");
//             }
//         }, 1500);
//     });
// }

// fetchUserData(1)
//     .then((user) => console.log("Пользователь:", user))
//     .catch((error) => console.log("Ошибка:", error));

// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Шаг 1 завершен"), 500);
//     });
// }
// function step2(previousResult) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`${previousResult} -> Шаг 2 завершен`), 500);
//     });
// }
// function step3(previousResult) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершен`), 500);
//     });
// }
// step1()
//     .then((result1) => step2(result1))
//     .then((result2) => step3(result2))
//     .then((finalResult) => console.log("Финальный результат:", finalResult))
//     .catch((error) => console.log("Ошибка в цепочке:", error));


console.log("Практическое задание");
function checkInventory(productName, inStock) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (inStock) {
                resolve(`Товар "${productName}" есть в наличии!`);
            } else {
                reject(`Ошибка: Товара "${productName}" нет на складе!`);
            }
        }, 1000);
    });
}
checkInventory("Ноутбук", true)
    .then((message) => console.log(message))
    .catch((error) => console.log(error));
