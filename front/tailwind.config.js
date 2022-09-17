/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `composables/**/*.{js,ts}`,
        `plugins/**/*.{js,ts}`,
        `App.{js,ts,vue}`,
        `app.{js,ts,vue}`
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '0.5rem',
                sm: '1rem',
                lg: '2rem',
                xl: '2.5rem',
                '2xl': '3rem',
            },
        },
        extend: {
            fontFamily: {
                'poppins': 'Poppins',
                'didot': 'Didot',
            },
            spacing: {
                '27': '6.75rem', // 108px
                '125': '31.25rem', // 500px
                '137': '34.375rem', // 550px
                '150': '37.5rem', // 600px
                '157': '39.25rem', // 628px
                '205': '51.25rem', // 820px
                '214': '53.5rem', // 856px
            },
            colors: {
                "primary": {
                    "50": "#ecda9c",
                    "100": "#e2d092",
                    "200": "#d8c688",
                    "300": "#cebc7e",
                    "400": "#c4b274",
                    "500": "#baa86a",
                    "600": "#b09e60",
                    "700": "#a69456",
                    "800": "#9c8a4c",
                    "900": "#928042"
                },
                "secondary": {
                    "50": "#38537f",
                    "100": "#2e4975",
                    "200": "#243f6b",
                    "300": "#1a3561",
                    "400": "#102b57",
                    "500": "#06214d",
                    "600": "#001743",
                    "700": "#000d39",
                    "800": "#00032f",
                    "900": "#000025"
                },
                "tertiary": {
                    "50": "#59585b",
                    "100": "#4f4e51",
                    "200": "#454447",
                    "300": "#3b3a3d",
                    "400": "#313033",
                    "500": "#272629",
                    "600": "#1d1c1f",
                    "700": "#131215",
                    "800": "#09080b",
                    "900": "#000001"
                },
                "quaternary": {
                    "50": "#7cf5cb",
                    "100": "#72ebc1",
                    "200": "#68e1b7",
                    "300": "#5ed7ad",
                    "400": "#54cda3",
                    "500": "#4ac399",
                    "600": "#40b98f",
                    "700": "#36af85",
                    "800": "#2ca57b",
                    "900": "#229b71"
                },
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
