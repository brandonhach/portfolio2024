import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				xxl: { min: '1920px' },
			},
		},
	},
	daisyui: {
		themes: ['black', 'cmyk'],
	},
	plugins: [require('daisyui'), require('tailwind-scrollbar-hide')],
};
export default config;
