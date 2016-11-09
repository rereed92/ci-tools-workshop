import { assert } from 'chai';
import Utils from '../src/utils';

describe ('Utils', () => {
	let utils;

	beforeEach(() => {
		utils = new Utils();
	});

	describe('Path', () => {
       it('should return the file filenam.ext', () => {
           assert.equal(utils.getFilename("path/to/filename.ext"), 'filename.ext', 'passed file');
       });

       it('should not return a string', () => {
           assert.equal(utils.getFilename(5678), 'Not a string', 'numbers passed');
       });

       it('should not return a boolean', () => {
           assert.equal(utils.getFilename(true), 'Not a string', 'boolean passed');
       });
   });

	describe('Date', () => {
		it('Should return the date', () => {
			assert.equal(utils.getDate(new Date(1992,8,4)), '04/08/1992', 'Pass a date');
			assert.equal(utils.getDate(new Date(1992,8,4,3,8)), '04/08/1992', 'Pass a long date');
			assert.equal(utils.getDate(new Date(2016,10,19)), '19/10/2016', 'Pass another date');
		});

		it('Should return error', () => {
			assert.equal(utils.getDate(), 'Invalid Date', 'Empty arguments');
			assert.equal(utils.getDate('1992, 08, 04'), 'Invalid Date', 'Pass a string');
		});
	});
})