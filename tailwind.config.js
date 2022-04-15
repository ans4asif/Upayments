const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      // poppins: ['Poppins'], //base font
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1536px',
    },
    // borderRadius: {
    //   'none': '0',
    //   'sm': '.125rem',
    //   DEFAULT: '.25rem',
    //   'lg': '.5rem',
    //   'full': '9999px',
    // },
    maxWidth: {
      card: '280px',
    },
    extend: {
      colors: {
        primary: '#00bcd4',
        secondary: '#ff9800',
        'rose-white': '#fafafa',
        scampi: '#6f6c99', //input border color
        heather: '#b0b7c3', // placeholder color
        info: '#3086eb',
        warning: '#ffc122',
        success: '#47d664',
        error: '#c40302',
        //btn
        'baby-blue': '#40ddff', //btn linear gradient start point
        'summer-sky': '#13b1e6', //btn linear gradient end point
        'paris-rgba': 'rgba(41, 37, 88, 0.536345) 4.06%', //input linear gradient start point
        'paua-rgba': 'rgba(38, 35, 83, 0.866791) 42.35%', //input linear gradient middle point
        'paua-dark-rgba': 'rgba(33, 30, 75, 0.50218) 99.53%', //input linear gradient end point
        scampi: '#6f6c99', //input border color
        heather: '#b0b7c3', // placeholder color
        paua: '#262250',
        'paua-light': '#2B285B',
        'paua-dark': '#1A193F',
      },
    },
  },
  plugins: [],
};
