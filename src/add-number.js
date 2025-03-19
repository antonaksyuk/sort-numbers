import data from './data.js';
debugger;

const readNumber = (id) => {
    const value = document.getElementById(id).value
    return Number(value);
}

const display = (id, content) => {
    document.getElementById(id).innerText = content;
}

const addNumber = () => {
    const newNumber = readNumber('user-input');
    data.numbers.push(newNumber);

    let numbersList = '';
    for (const num of data.numbers) {
        numbersList += `* ${num}\n`;
    }
    display('all-numbers', numbersList);
};

document.getElementById('add-it').addEventListener('click', addNumber);
