module.exports = {
    content: ['./src/**/*.{js,jsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                primary: '#1B73E8',
                'light-purple-theme': 'rgba(214, 198, 198, 0.15)',
                'primary-theme': '#D6C6C6',
                'primary-grey': '#F9F7F7',
                'secondary-dark-theme': '#C8B6AA',
                'bar-bg':'rgba(51, 51, 51, 0.51)'
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};