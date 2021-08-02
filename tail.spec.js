const tail = require('./tail');

describe('Tail', () => {

    it('Tail of [1,2,3] is [2,3]', () => {
        expect(tail([1, 2, 3])).toEqual([2,3]);
    });

    it('Tail of [2,5,7,9] is [5,7,9]', () => {
        expect(tail([2, 5, 7, 9])).toEqual([7,9]);
    });

    it('Tail of [] is []', () => {
        expect(tail([])).toEqual([]);
    });
})
