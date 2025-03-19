const numbers = [];

const readNumber = (id) => {
    const value = document.getElementById(id).value
    return Number(value);
}

const display = (id, content) => {
    document.getElementById(id).textContent = content;
}

const addNumber = () => {
    const newNumber = readNumber('user-input');
    numbers.push(newNumber);

    let numbersList = '';
    for (const num of numbers) {
        numbersList += `* ${num}\n`;
    }
    display('all-numbers', numbersList);
};