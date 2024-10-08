/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'color-1': '#4A6360',
				'color-2': '#81948B',
				'color-3': '#C6D7CF',
				'color-4': '#FAF7F3',
				'color-5': '#EFEDE7',
				'color-6': '#868686',
				'color-7': '#BFA880',
		},
		fontFamily: {
			'cookie': 'Cookie',
		},
		boxShadow: {
			'custom': '0px 0px 15px -1px rgba(0, 0, 0, 0.40)',
			'custom2': '0px 0px 5px -1px rgba(0,0,0,0.40)',
		},
		fontSize:{
			'title': '55px',
		}
		},
	},
	plugins: [
		function ({ addComponents, theme }) {
			addComponents({
				'.title': {
				  fontSize: theme('fontSize.title'),
				  color: theme('colors.color-1'),
				  fontFamily: theme('fontFamily.cookie'),
				  textAlign: 'center',
				}
			  })
		  },
	],
}
