import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

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
  },
  plugins: [],
}

export default config