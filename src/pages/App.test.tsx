import '../testing';

import { render } from '@testing-library/preact';
import { expect } from 'chai';
import { h } from 'preact';

import { App } from './App';

describe('<App />', () => {
	it('renders', () => {
		const { container } = render(<App />);
		expect(container.textContent).to.equal('Yo');
	});
});
