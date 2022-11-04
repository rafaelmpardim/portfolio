/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/**/*.tsx'
	],

	theme: {
		colors: {
			black: '#08070B',

			cyan: {
				900: '#06B6D4'
			},

			gray: {
				600: '#475569',
				100: '#CBD5E1'
			},

			pink: {
				850: '#881337'
			},

			yellow: {
				500:'#E6E882'
			}
		}
	},

	extend: {
		fontFamily: {
			sans: 'Saira, sans-serif'
		},
	},
  
	plugins: [],
}
