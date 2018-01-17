module.exports = async function(config) {
  config.module.rules = config.module.rules.map(function(rule) {
    if (rule.use.loader === 'babel-loader') {
      // Stage-0 necessary for static contextTypes in React.Components
      rule.use.options.presets.push('stage-0')
    }
    return rule
  })
};

//
// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['react', 'es2015', 'stage-0'],
//             plugins: ['transform-runtime', 'transform-class-properties']
//           }
//         }
//       }
//     ]
//   }
// };
