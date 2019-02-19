import { expect } from 'chai';
import { doWork } from '../src/service';

describe('the service', () => {

    it('should do work', () => {
        const expected = 4;

        const actual = doWork(3, 1);

        expect(expected).to.equal(actual);
    });

    it('should not not do work', () => {
        const expected = 5;

        const actual = doWork(3, 1);

        expect(expected).to.not.equal(actual);
    });

});
