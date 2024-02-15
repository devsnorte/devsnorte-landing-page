import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'var(--font-poppins)'
      },
      colors: {
        brand: '#5ED29E'
      },
      maxWidth: {
      
      }
    }
  },
  plugins: []
}
export default config
