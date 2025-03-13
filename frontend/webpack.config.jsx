const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Añade esta línea
  entry: './src/index.js', // Punto de entrada de tu aplicación
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    filename: 'bundle.js', // Nombre del archivo de salida
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Regla para archivos JavaScript/JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Usa Babel para transpilar
        },
      },
      {
        test: /\.css$/, // Regla para archivos CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Usa tu archivo HTML como plantilla
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'), // Carpeta para servir archivos estáticos
    compress: true,
    port: 3001, // Puerto del servidor de desarrollo
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Extensiones que Webpack resolverá automáticamente
  },
};