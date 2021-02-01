import { expect } from 'chai';
import {double} from './math';

describe('math lib', () => {
	it('doubles', () => {
		const v = double(2);
		expect(v).to.equal(4);
	});
});
