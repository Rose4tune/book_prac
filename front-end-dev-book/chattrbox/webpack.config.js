// const path = require('path');
//
// module.exports = {
//   // entry: ['@babel/polyfill', './app/scripts/src/main.js'],
//   entry: './app/scripts/src/main.js',
//   output: {
//     path: path.resolve(__dirname, './app/scripts/dist'),
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         include: [
//           path.resolve(__dirname, './app/scripts/src')
//         ],
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//             plugins: ['@babel/plugin-proposal-class-properties']
//           }
//         }
//       }
//     ]
//   },
//   devtool: 'source-map',
//   mode: 'development'
// }
