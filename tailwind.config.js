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
                heartbeat: 'heartbeat 3s infinite ease-in-out',
                scroll: 'down 3s infinite linear, appear 3s infinite ease-in-out',
            },
            keyframes: {
                appear: {
                    '0%': { opacity: 0 },
                    '20%': { opacity: 0 },
                    '45%': { opacity: 1 },
                    '55%': { opacity: 1 },
                    '80%': { opacity: 0 },
                    '100%': { opacity: 0 },
                },
                down: {
                    '0%': { transform: 'translate(0, -100%)'},
                    '100%': { transform: 'translate(0, 100%)'},
                },
                hero: {
                    '0%, 100%': { transform: 'scale(1) translate(20px, 50px)' },
                    '40%': { transform: 'scale(1.5) translate(-20px, 50px)' },
                    '60%': { transform: 'scale(1.1) translate(10px, -50px)' },
                    '80%': { transform: 'scale(1.3) translate(-10px, 20px)' },
                },
                heartbeat: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '7%': { transform: 'scale(1.25)' },
                    '14%': { transform: 'scale(0.95)' },
                    '21%': { transform: 'scale(1.15)' },
                    '28%': { transform: 'scale(1)' },
                },
            }
        },
    },
    plugins: [],
};
