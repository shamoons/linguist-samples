var fs = require('fs');
var path = require('path');

Samples = (function() {
  Samples.prototype.readFile = function(filePath) {
    var fileData = fs.readFileSync(path.join(__dirname, 'samples', filePath), 'utf-8');
  }

  Samples.prototype.loadSampleFile = function(sampleFilePath) {
    if(sampleFilePath === null) {
      sampleFilePath = path.join(__dirname, 'samples.json');
    }

    var sampleFileData = fs.readFileSync(sampleFilePath, 'utf-8');

    jsonData = JSON.parse(sampleFileData);
  }
})();

module.exports = new Samples()