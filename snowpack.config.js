// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		src: '/',
		public: '/',
	},
	plugins: [
		[
			'@snowpack/plugin-sass',
			{
				compilerOptions: {
					loadPath: './node_modules',
				},
			},
		],
		'@snowpack/plugin-typescript',
	],
	packageOptions: {
		/* ... */
	},
	devOptions: {
		/* ... */
	},
	buildOptions: {
		/* ... */
		clean: true,
	},
};
