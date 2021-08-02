const max = (array) => {
    let maximum = array[0];
    for (let value of array) {
        maximum = (maximum > value) ? maximum : value;
    }
    return maximum;
}
module.exports = max;