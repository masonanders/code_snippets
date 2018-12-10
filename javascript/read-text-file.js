// For browser
function requestFileData(path) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          resolve(xhr.responseText);
        } else {
          reject(xhr);
        }
      }
    };
    xhr.open("GET", path);
    xhr.send();
  });
}

function getFileDataBrowser(path, action) {
  requestFileData(path)
  .then(data => action(data))
  .catch(err => console.error(err));
}

// For node
const fs = require("fs");

function getFileDataNode(path) {
  return fs.readFileSync(path, "utf8");
}

exports.getFileDataNode = getFileDataNode;
exports.getFileDataBrowser = getFileDataBrowser;
