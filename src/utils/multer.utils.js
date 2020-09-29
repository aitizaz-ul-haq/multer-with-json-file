const multer = require("multer");
const imageDir = require('path').join(__dirname, '../../public/docs/');

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, imageDir);
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage: storage }, { limits: 1024 * 1024 * 5 });
let type = upload.single("productImage");

module.exports = {
  type,
};