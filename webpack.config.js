const path = require('path');

module.exports = {
  entry: './ts/index.ts',
  output: {
    filename: 'bundle.js', // Nome do arquivo de saída
    path: path.resolve(__dirname, 'dist') // Pasta de saída
  },
  resolve: {
    extensions: ['.ts', '.js'] // Permitir importar arquivos .ts e .js
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};
