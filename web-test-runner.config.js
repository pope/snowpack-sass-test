const { puppeteerLauncher } = require('@web/test-runner-puppeteer');
const {
	visualRegressionPlugin,
} = require('@web/test-runner-visual-regression/plugin');

// NODE_ENV=test - Needed by "@snowpack/web-test-runner-plugin"
process.env.NODE_ENV = 'test';

/** @type {import('@web/test-runner').TestRunnerConfig} */
module.exports = {
	files: 'src/**/*.test.{js,ts,tsx}',
	browsers: [
		puppeteerLauncher({
			launchOptions: {
				args: ['--no-sandbox'],
			},
		}),
	],
	plugins: [
		require('@snowpack/web-test-runner-plugin')(),
		visualRegressionPlugin(),
	],
};
