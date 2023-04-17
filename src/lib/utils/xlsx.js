import { read } from 'xlsx/xlsx.mjs';
import { readFileSync } from 'fs';

/**
 * This reads the workbook from the given path.
 *
 * @param {string} path The path to the workbook.
 * @returns {import('xlsx/xlsx.mjs').WorkBook} The workbook.
 */
export function readFile(path) {
	const buffer = readFileSync(path);
	return read(buffer, { type: 'buffer', dense: true });
}

/**
 * This parses the worksheet into an array of objects.
 *
 * @param sheet The worksheet.
 * @returns {{}[]} The array of objects.
 */
export function parseSheet(sheet) {
	const data = sheet['!data'];
	const header = data[0].map((cell) => cell.v);
	const rows = data.slice(1);
	return rows.map((row) => {
		const obj = {};
		for (const [i, cell] of row.entries()) {
			obj[header[i]] = cell.v;
		}
		return obj;
	});
}
