import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/UI/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        pinkLite: '#E4229C',
        pinkDark: '#E4229B',
      },
      secondary: '#36173D',
      background: '#1F002B',
      ...colors,
    },
    extend: {
      fontFamily: {
        'sans': ['"Nunito Sans Variable"', ...defaultTheme.fontFamily.sans],
        cursive: ['Niconne', 'cursive'],
      },
    },
  },
  plugins: [],
}

export default config