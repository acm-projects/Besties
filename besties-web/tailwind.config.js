/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme') 

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        // 'sans': ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#E974A7",
        "secondary": "#8B1D3E",
        "accent": "#7A1E71",
        "neutral": "#3d4451",
        "base-100": "#FFF5FA",
        "info": "#ECB8C7"
      },
    }],
  },
}

