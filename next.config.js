/** @type {import('next').NextConfig} */

module.exports = {
    async redirects() {
        return [
            {
                source: '/services',
                destination: '/',
                permanent: true, // змініть на false, якщо це тимчасовий редірект
            },
        ]
    },
}
