var path = require('path');

var extractFilePath = function (url) {
  var filePath;
  var fileName = 'index';
  if (url.length > 1) {
  fileName = url.substring(1);
  }
  filePath = path.resolve(__dirname, 'app', fileName + ".html");
  return filePath;
};

module.exports = extractFilePath;
