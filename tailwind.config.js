/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Press Start 2P"', "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
};
