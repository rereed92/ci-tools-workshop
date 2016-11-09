import fs from 'fs';

export default class File {
	// Silence is Golden
	
	readTxt(filename) {

		if (typeof filename !== 'string') {
			return '';
		}

		let content = fs.readFileSync(`${filename}.txt`, 'utf-8');

		return content;
	} 
	
}