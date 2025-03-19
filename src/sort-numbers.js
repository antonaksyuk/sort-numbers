import data from './data.js';

import sortNum from './utils/sort.js';

const sortNumbers = () => {

  const sortType = document.getElementById('sort-type').value;

  const sortedNumbers =
    sortType === 'none'
      ? data.numbers
      : sortType === 'up'
      ? sortNum(data.numbers, true)
      : sortNum(data.numbers, false);

  let numbersList = '';
  for (const num of sortedNumbers) {
    numbersList += `* ${num}\n`;
  }
  document.getElementById('all-numbers').innerText = numbersList;
};

document.getElementById('sort-type').addEventListener('change', sortNumbers);