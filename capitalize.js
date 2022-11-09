const capitalize = (str) => {
    const firstLetter = str[0].toUpperCase();
    const other = str.slice(1);
    const word = firstLetter + other;

    return(word);
}

module.exports = capitalize