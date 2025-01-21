module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './',
          },
        },
      ],
      ['react-native-unistyles/plugin'],
      'react-native-reanimated/plugin',
    ],
  };
};
