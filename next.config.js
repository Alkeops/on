module.exports = {
  images: {
    domains: [process.env.WORDPRESS_URL],
  },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      return config;
    }
  };