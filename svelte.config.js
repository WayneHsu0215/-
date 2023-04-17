import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import adapter1 from '@sveltejs/adapter-netlify';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		adapter1: adapter1({
			edge: true,
			split: false
		  }),
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
	
};

export default config;
