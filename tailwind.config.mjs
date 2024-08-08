/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'cookie': 'Cookie',
		},
		extend: {
			colors: {
				'primary': '#4A6360',
				'secondary': '#C6D7CF',
				'tertiary': '#BFA880',
				'background': '#EFEDE7',
				'card':'#FAF7F3'
		},

		}
	},
	plugins: [],
}
