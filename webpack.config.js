const path = require("path");
module.exports = {
  entry: [
    "/src/index.js",
    "/src/bg-canvas.js",
    "/src/book.js",
    "/src/draw-canvas.js",
    "/src/firebase.js",
    "/src/hmbrger-menu.js",
  ],
  mode: "development",
  watch: true,
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "y"),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
