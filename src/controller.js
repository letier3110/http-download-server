const fs = require("fs");
const { BASE_URL } = require("./config");

const getListFiles = (req, res) => {
  const directoryPath = __basedir + "/static/";
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }
    let fileInfos = [];
    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: BASE_URL + file,
      });
    });
    res.status(200).send(fileInfos);
  });
};

const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/static/";
  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

const upload = (req, res) => {
  res.status(200).send({
    message: "file uploaded " + err,
  });
};

module.exports = {
  getListFiles,
  download,
  upload,
};
