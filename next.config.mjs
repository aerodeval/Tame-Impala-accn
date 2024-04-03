/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './my-loader.ts',
        domains:['res.cloudinary.com']
      },
};

export default nextConfig;
