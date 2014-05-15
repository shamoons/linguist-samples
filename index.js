var fs = require('fs');
var path = require('path');

module.exports = function(filePath, cb) {
  fileData = fs.readFileSync(path.join(__dirname, 'samples', filePath), 'utf-8');
  return fileData;

}