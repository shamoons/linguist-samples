var fs = require('fs');
var path = require('path');

module.exports = function(filePath, cb) {
  console.log(process.cwd());
  console.log(__dirname);
  console.log(path.join(__dirname, '../samples', filePath));
  console.log(path.join('../samples', filePath));
  console.log(path.join('./node_modules', 'linguist-samples', 'samples', filePath));
  fs.readFile(path.join(__dirname, '../samples', filePath), function(err, fileData) {
    cb(err, fileData);
  });
}