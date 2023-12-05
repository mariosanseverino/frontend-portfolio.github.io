import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				blue: '#1B418C',
				silver: '#79818C',
				black: '#060A0D',
				gray: '#434F59',
				white: '#F2F2F2'
			}
		},
	},
	plugins: [],
};
export default config;
