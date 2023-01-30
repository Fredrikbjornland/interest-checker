/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./views/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./sections/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                green: "#009B81",
                darkGray: "#232230"
            }
        }
    },
    plugins: []
}
