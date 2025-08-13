import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FDFBF8",
          primary: "#FFA94D",  
          text: "#161616",
        }
      },
      borderRadius: { pill: "9999px" }
    },
  },
  plugins: [],
}
export default config