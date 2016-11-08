import { assert } from 'chai';
import Utils from '../src/utils';

describe ('Utils', () => {
	let utils;

	beforeEach(() => {
		utils = new Utils();
	});

	// describe('Path', () => {

	// });

	describe('Date', () => {
		it('Should return the date', () => {
			assert.equal(utils.date(new Date(1992,8,4)), '04/08/1992', 'Pass a date');
			assert.equal(utils.date(new Date(1992,8,4,3,8)), '04/08/1992', 'Pass a long date');
			assert.equal(utils.date(new Date(2016,10,19)), '19/10/2016', 'Pass another date');
		});

		it('Should return error', () => {
			assert.equal(utils.date(), 'Invalid Date', 'Empty arguments');
			assert.equal(utils.date('1992, 08, 04'), 'Invalid Date', 'Pass a string');
		});
	});
})