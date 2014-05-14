var fs = require('fs');
var path = require('path');

module.exports = function(filePath, cb) {
  fs.readFile(path.join(__dirname, 'samples', filePath), 'utf-8', function(err, fileData) {
    cb(err, fileData);
  });
}