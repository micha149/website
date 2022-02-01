module.exports = {
    content: [
        './src/pages/*.{tsx, ts}',
        './src/components/*.{tsx, ts}',
    ],
    theme: {
        fontFamily: {
            display: '\'Work SansVariable\', sans-serif'
        },
        extend: {
            animation: {
                hero: 'hero 20s infinite ease-in-out',
            },
            keyframes: {
                hero: {
                    '0%, 100%': { transform: 'scale(1) translate(20px, 50px)' },
                    '40%': { transform: 'scale(1.5) translate(-20px, 50px)' },
                    '60%': { transform: 'scale(1.1) translate(10px, -50px)' },
                    '80%': { transform: 'scale(1.3) translate(-10px, 20px)' },
                }
            }
        },
    },
    plugins: [],
};
