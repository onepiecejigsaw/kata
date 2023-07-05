import {addOne} from "../src";

describe('addOne', () => {
    it('adds one', () => {
        const result = addOne(1);

        expect(result).toBe(2);
    })
})
