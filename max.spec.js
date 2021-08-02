const max = require('./max');

describe('Max', () => {

    it('Max of [1,2,3] is 3', () => {
        expect(max([1, 2, 3])).toEqual(3);
    });

    it('Max of [2,5,7,9] is 9', () => {
        expect(max([2, 5, 7, 9])).toEqual(9);
    });

})