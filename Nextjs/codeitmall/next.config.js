/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // 리다이렉트 여기에 추가, 서버 껏다가 다시켜야 적용됨
    async redirects() {
        return [
            {
                // 리다이렉트 처리할 주소
                source: '/products/:id',
                // 이동시킬 주소, :id는 param의 이름
                destination: '/items/:id',
                // permanent는 response states 코드를 정한다. 주소가 바뀌었음을 알리려면 true 아니면 false
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'example.com',
                port: '',
                pathname: '/account123/**',
            },
        ],
    },
};

module.exports = nextConfig;
