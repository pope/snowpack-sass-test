import { configure } from '@testing-library/dom';

const DEFAULT_TIMEOUT = 5000; // ms

before(async function () {
	this.timeout(DEFAULT_TIMEOUT);
	configure({
		asyncUtilTimeout: DEFAULT_TIMEOUT,
	});
	await Promise.all([
		document.fonts.load('12px "Material Icons"'),
		document.fonts.load('300 12px Roboto'),
		document.fonts.load('400 12px Roboto'),
		document.fonts.load('500 12px Roboto'),
		document.fonts.load('700 12px Roboto'),
	]);
	return document.fonts.ready;
});
