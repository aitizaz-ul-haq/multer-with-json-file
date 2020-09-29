
const { User } = require("../models/user.model");

//ADD a user to db
const addUser = async (req, res) => {
  try {
    console.log(req.file.path);
    console.log(req.file);
    const filePath = req.file.path;
    const filename = req.file.filename;
    const server = "localhost" + process.env.PORT + "/"
    const { name, email, password } = req.body;
    const response = await User.create({
      name: name,
      email: email,
      password: password,
      productImage: server + filename,
    });

    return res.status(200).json({
      status: true,
      data: response,
    });
  } catch (error) {
    return res.status(200).json({
      status: false,
      error: error.message,
    });
  }
};


//get all users from the db
const getUsers = async (req, res) => {
  try {
    const response = await User.find();

    return res.status(200).json({
      status: true,
      length: response.length,
      data: response,
    });
  } catch (error) {
    return res.status(200).json({
      status: false,
      error: error.message,
    });
  }
};

//get user from db by ID
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await User.find({
      _id: id,
      productImage: productImage,
    });

    return res.status(200).json({
      status: true,
      data: response,
    });
  } catch (error) {
    return res.status(200).json({
      status: false,
      error: error.message,
    });
  }
};

//update user by ID
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;

    const updateObj = req.body;

    await User.update({ _id: id }, { $set: updateObj });

    const response = await User.find({ _id: id });

    return res.status(200).json({
      status: true,
      data: response,
    });
  } catch (error) {
    return res.status(200).json({
      status: false,
      error: error.message,
    });
  }
};

//remove user from db

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    await User.deleteOne({
      _id: id,
    });

    return res.status(200).json({
      status: true,
      message: "record deleted",
    });
  } catch (error) {
    return res.status(200).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = {
  addUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
