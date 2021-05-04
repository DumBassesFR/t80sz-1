const path = require('path');
const { mdsvex } = require('mdsvex');
const sveltePreprocess = require('svelte-preprocess');
module.exports = {
	output: {
		filename: "src/t80sz.core.js",
		path: path.resolve(__dirname, "public"),
	},
	resolve: {
    	alias: {
      		svelte: path.resolve('node_modules', 'svelte')
    	},
    	extensions: ['.mjs', '.js', '.svelte', '.svx'],
    	mainFields: ['svelte', 'browser', 'module', 'main']
  	},
  	module: {
    	rules: [
			{
				test: /\.(svelte|svx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'svelte-loader',
					options: {
						preprocess: [ sveltePreprocess({
							postcss: true,
							
						}), mdsvex() ]
					}
				}
			},
			{
        		test: /\.tsx?$/,
        		use: 'ts-loader',
        		exclude: /node_modules/,
      		},
      		{
        		test: /node_modules\/svelte\/.*\.mjs$/,
        		resolve: {
          			fullySpecified: false
        		}
      		},
			{
        		test: /\.(css|pcss)$/i,
        		exclude: /node_modules/,
        		use: ["css-loader", "postcss-loader"]
      		}
    	]
  	}
}
