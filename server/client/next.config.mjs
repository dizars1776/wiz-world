/** @type {import('next').NextConfig} */
const nextConfig = process.env.NODE_ENV === 'development' ? {
    async rewrites() {
        return [
            {
                source: '/houses/:path*',
                destination: 'http://localhost:9090/houses/:path*',
            },
        ];
    },
} : {
    output: 'export',
}

export default nextConfig;
