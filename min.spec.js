const min = require('./min');

describe('Min', () => {

    it('Min of [1,2,3] is 1', () => {
        expect(min([1, 2, 3])).toEqual(1);
    });

    it('Min of [2,5,7,9] is 2', () => {
        expect(min([2, 5, 7, 9])).toEqual(2);
    });

})