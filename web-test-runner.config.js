const { puppeteerLauncher } = require('@web/test-runner-puppeteer');

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
	plugins: [require('@snowpack/web-test-runner-plugin')()],
};
