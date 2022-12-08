const fs = require("fs");
module.exports = async function (req, res, next) {
  try {
    console.log(req.files)
    if (!req.files || Object.values(req.files).flat().length === 0) {
      return res.status(400).json({ message: "No files selected." });
    }
    let files = Object.values(req.files).flat();
    files.forEach((file) => {
      if (
        file.mimetype !== "image/jpeg" &&
        file.mimetype !== "image/png" &&
        file.mimetype !== "image/webp" &&
        file.mimetype !== "image/gif"
      ) {
        removeTmp(file.tempFilePath);
        return res.status(400).json({ message: "Un supported format." });
      }
      if (file.size > 1024 * 1024 * 5) {
        removeTmp(file.tempFilePath);
        return res.status(400).json({ message: "The file is too big." });
      }
    });
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};