const reverseString = (str) => {
    const reverse = str.split('').reverse().join('');
    return reverse;
}

// console.log(reverseString('shaddai'));

module.exports = reverseString