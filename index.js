var fs = require('fs');
var path = require('path');

module.exports = function(filePath, cb) {
  console.log(process.cwd());
  console.log(__dirname);
  console.log(path.join(__dirname, '../samples', filePath));
  fs.readFile(path.join(__dirname, '../samples', filePath), function(err, fileData) {
    cb(err, fileData);
  });
}