const stringLength = (string) => {
    const str_length = string.length;
    if(str_length > 1 && str_length <= 10){
        return str_length;
    } else {
        throw new Error('invalid string');
    }
}

module.exports = stringLength