/**
 * Sort an array of numbers
 *
 * @param {array} numbers - The array with numbers to sort
 * @param {boolean} up - The boolean flag to check if it is true or false
 * @returns {array} - The sorted array
 */

const sortNum = (numbers = [], up = true) => {
    if (up) {
        return numbers.sort((a,b) => a-b);
    }
    return numbers.sort((a,b) => b-a);
};

export default sortNum;
