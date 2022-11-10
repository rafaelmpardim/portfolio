/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.tsx'
	],
	theme: {
		colors: {
			black: '#08070B',

			cyan: {
				900: '#06B6D4',
				950: '#046070'
			},

			gray: {
				600: '#475569',
				100: '#CBD5E1'
			},

			pink: {
				850: '#881337'
			},

			transparent: 'transparent',

			yellow: {
				500:'#E6E882'
			},
		},
 
		extend: {
			fontFamily: {
				sans: 'Saira, sans-serif'
			},

			fontSize: {
				'sm': '1.125rem',
				'md': '1.5rem',
				'lg': '2rem',
				'xl': '2.5rem',
				'2xl': '3rem'
			},

			gridTemplateColumns: {
				'projects': 'auto auto auto',
				'events': 'repeat(auto-fit, minmax(320px, 1fr))',
			}
		},
	},
	plugins: [],
}
