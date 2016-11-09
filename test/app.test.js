import { assert } from 'chai';
import Utils from '../src/utils';
import File from '../src/file';
import fs from 'fs';

describe ('App', () => {
	let file;
	let utils;
	let filePath;
	let fileName;

	beforeEach(() => {
		file = new File();
		utils = new Utils();

		filePath = '/files/file.txt'
		fileName = utils.getFilename(filePath);

		fs.writeFileSync(fileName, 'File content', 'utf-8');
	});

	it('Should print the content of the file within a path', () => {
		assert.equal(file.readTxt(utils.getFilename(filePath)), 'File content', 'Pass in filename');
	});

	afterEach(() => {
		fs.unlinkSync(fileName);
	});

});