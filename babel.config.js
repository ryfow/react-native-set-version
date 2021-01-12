const presets = [
  [
    '@babel/env',
    {
      targets: {
        node: true,
      },
      useBuiltIns: 'usage',
      corejs: '2.x',
    },
  ],
];

module.exports = { presets };
