/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'source.unsplash.com', // Add this
        // ...add other domains as needed
      ],
    },
    // Add webpack configuration to handle font files correctly
    webpack(config) {
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[name][ext]',
        },
      });
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': '.',
        '@app': './src/app',
        '@components': './src/app/components',
        '@hooks': './src/app/hooks',
      };
      return config;
    },
    experimental: {},
  };

export default nextConfig;
