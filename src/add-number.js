// import data from './data.js';
// debugger;

// const readNumber = (id) => {
//     const value = document.getElementById(id).value
//     return Number(value);
// }

// const display = (id, content) => {
//     document.getElementById(id).innerText = content;
// }

// const addNumber = () => {
//     const newNumber = readNumber('user-input');
//     data.numbers.push(newNumber);

//     let numbersList = '';
//     for (const num of data.numbers) {
//         numbersList += `* ${num}\n`;
//     }
//     display('all-numbers', numbersList);
// };

// document.getElementById('add-it').addEventListener('click', addNumber);


import data from './data.js';

const readNumber = (id) => {
    const inputElement = document.getElementById(id);
    if (!inputElement) {
        console.error(`Элемент с id="${id}" не найден`);
        return null;
    }
    return Number(inputElement.value);
};

const display = (id, content) => {
    const element = document.getElementById(id);
    if (element) {
        element.innerText = content;
    }
};

const addNumber = () => {
    const newNumber = readNumber('user-input');
    if (newNumber === null) return; // Проверяем, что число считалось

    data.numbers.push(newNumber);

    let numbersList = '';
    for (const num of data.numbers) {
        numbersList += `* ${num}\n`;
    }
    display('all-numbers', numbersList);
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add-it').addEventListener('click', addNumber);
});