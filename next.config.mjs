/** @type {import('next').NextConfig} */

const port = process.env.PORT || 50001;

export default {
    server: {
        port: parseInt(port, 10)
    }
};

// export default nextConfig;
