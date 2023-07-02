const express = require("express");
const UserInfo = require("../Models/UserInfo");

const getInfo = async (req, res) => {
  try {
    const userId = req.params.user_id;
    const userInfo = await UserInfo.find({ user_id: userId });
    if (userInfo.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ data: userInfo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createInfo = async (req, res) => {
  try {
    const info = await UserInfo.create(req.body);
    res.status(201).json({ data: info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateInfo = async (req, res) => {
  try {
    const userId = req.params.user_id;
    const updatedInfo = req.body;
    const info = await UserInfo.findOneAndUpdate(
      { user_id: userId },
      updatedInfo,
      { new: true }
    );
    if (!info) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ data: info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteInfo = async (req, res) => {
  try {
    const userId = req.params.user_id;
    const info = await UserInfo.findOneAndDelete({ user_id: userId });
    if (!info) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "Info deleted", data: info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getInfo,
  createInfo,
  deleteInfo,
  updateInfo,
};
