import { assert } from 'chai'; 
import File from '../src/file';
import fs from 'fs';

describe ('File', () => {
	let file;

	beforeEach(() => {
		file = new File();

		fs.writeFileSync('file.txt', 'This is the content from the file', 'utf-8');
	});

	describe('Read', () => {
		it('Should return the contents of the file', () => {
			assert.equal(file.readTxt('file'), 'This is the content from the file', 'Pass a file');	
		});

		it('Should return an empty string', () => {
			assert.equal(file.readTxt(true), '', 'Boolean passed');
			assert.equal(file.readTxt(123), '', 'Numbers passed');
		});

		it ('Should not append a second .txt when present in the filename', () => {
			assert.equal(file.readTxt('file.txt'), 'This is the content from the file', 'Pass a file with the extension')
		});
	});

	afterEach(() => {
		fs.unlinkSync('file.txt');
	});
})