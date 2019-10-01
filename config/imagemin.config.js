module.exports = {
  disable: process.env.NODE_ENV !== 'production',
  gifsicle: { optimizationLevel: 2, interlaced: false },
  mozjpeg: { progressive: true, quality: '65-80' },
  pngquant: { quality: '65-80' },
  svgo: {
    plugins: [{ removeViewBox: false }, { cleanupIDs: true }],
  },
  webp: { quality: '65-80' },
};
