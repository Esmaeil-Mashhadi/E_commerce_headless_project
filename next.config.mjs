/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                svgo: false, // Adjust based on your optimization needs
              },
            },
          ],
        });
    
        return config;
      },
};

export default nextConfig;
