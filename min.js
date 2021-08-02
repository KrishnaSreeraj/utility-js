const min = (array) => {
    let minimum = array[0];
    for (let value of array) {
        minimum = (minimum < value) ? minimum : value;
    }
    return minimum;
}
module.exports = min;