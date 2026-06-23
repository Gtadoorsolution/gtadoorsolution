/** @type {import('next').NextConfig} */

module.exports = {
    async redirects() {
        return [
            {
                source: '/services',
                destination: '/',
                permanent: true, // змініть на false, якщо це тимчасовий редірект
            },
            {
                source: '/services/emergency-lockout',
                destination: '/services/locksmith-services/emergency',
                permanent: true,
            },
        ]
    },
}
