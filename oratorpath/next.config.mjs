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
      return config;
    },
    // Disable experimental features that might be causing font issues
    experimental: {
      turbo: false, // Disable Turbopack
      optimizeFonts: true,
    },
    // Add path aliases
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': '.',
      };
      return config;
    },
  };

export default nextConfig;
