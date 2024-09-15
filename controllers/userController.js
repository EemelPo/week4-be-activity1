const User = require("../models/User.js");

 
 const getAllUsers = async (req, res) => {
  try {
 const users = await User.find({}).sort({ createdAt: -1 });
 res.status(200).json(users);
 }catch (error) {
  res.status(500).json({ message: "Failed to retrieve Users" });
 }};

 const createUser = async (req, res) => {
  try{
    const newUser = await User.create({ ...req.body });
    res.status(201).json(newUser);
  }catch (error) {
    res.status(500).json({ message: "Failed to create User" });
  }};
  
  
  const getUserById = async (req, res) => {
    const { userId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    const user = await User.findById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  };
  
  
  const updateUser = async (req, res) => {
    const { userId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    const updatedUser = await Blog.findOneAndUpdate(
      { _id: userId },
      { ...req.body },
      { new: true, overwrite: true }
    );
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  };
  
 
  const deleteUser = async (req, res) => {
    const { userId } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    const deletedUser = await User.findOneAndDelete({ _id: userId });
    if (deletedUser) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  };
  
  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };
  