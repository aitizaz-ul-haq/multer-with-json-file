const { type } = require("../../utils/multer.utils");
module.exports = (app) => {
  const {
    addUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
  } = require("../controllers/user.controller");

  app.post("/user", type, addUser);
  app.get("/user", getUsers);
  app.get("/user/:id", getUserById);
  app.put("/user/:id", updateUser);
  app.delete("/user/:id", deleteUser);
};
