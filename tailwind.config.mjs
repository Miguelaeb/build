/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
			  },

			  boxShadow: {
				'custom-white': '0 0 5px rgba(255, 255, 255, 0.5) inset',
			  },
		},
	},
	plugins: [],
}
