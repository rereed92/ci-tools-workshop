import fs from 'fs';
import path from 'path';
import utils from '../src/utils.js';

export default class File {
	// Silence is Golden
	
	readTxt(filename) {
		if (typeof filename !== 'string') {
			return '';
		}

		if (path.extname(filename)) {
			return fs.readFileSync(`${filename}`, 'utf-8');
		} else {
			return fs.readFileSync(`${filename}.txt`, 'utf-8');
		}
	} 
	
}