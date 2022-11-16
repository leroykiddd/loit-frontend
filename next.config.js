const loaders = [
  {
    test: /\.svg$/i,
    issuer: { and: [/\.(ts)x?$/] },
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          svgoConfig: { plugins: [{ removeViewBox: false }] },
        },
      },
    ],
  },
];


module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules = [...config.module.rules, ...loaders];

    return config;
  }
};
