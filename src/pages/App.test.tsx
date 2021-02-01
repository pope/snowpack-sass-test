import '../testing';

import { render } from '@testing-library/preact';
import { visualDiff } from '@web/test-runner-visual-regression';
import { expect } from 'chai';
import { h } from 'preact';

import { App } from './App';

describe('<App />', () => {
	it('renders', async () => {
		const { container } = render(<App />);
		expect(container.textContent).to.equal('Yo');

		// UNCOMMENT TO BLOW UP.
		//await visualDiff(container, 'pages/App/renders');
	});
});
