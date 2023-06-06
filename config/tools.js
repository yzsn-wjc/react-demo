const path = require("path");

const pathResolve = (url) => {
  return path.resolve(__dirname, "..", url);
};

module.exports = {
  pathResolve,
};
