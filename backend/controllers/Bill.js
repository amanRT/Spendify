const express = require("express");
const Bill = require("../Models/Bill");

const createBill = async (req, res) => {
  const id = req.params.user_id;
  // console.log(req.body);
  try {
    const bill = await Bill.create(req.body);
    res.status(201).json({ bill });
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

const getBill = async (req, res) => {
  try {
    const billId = req.params.id;
    const user_idBill = req.params.user_id;

    const bill = await Bill.findOne({ _id: billId });
    if (!bill) {
      res.status(404).json({ message: "Bill not found" });
    } else {
      res.status(200).json({ bill });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const updateBill = async (req, res) => {
  try {
    const billId = req.params.id;
    const user_idBill = req.params.user_id;

    const updatedBill = req.body;
    console.log(updatedBill);
    const bill = await Bill.findOneAndUpdate({ _id: billId }, updatedBill, {
      new: true,
    });
    if (!bill) return res.status(404).json({ message: "Bill not found " });
    else return res.status(200).json({ bill });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const getAllBills = async (req, res) => {
  try {
    const id = req.params.user_id;
    const bills = await Bill.find({ user_id: id });

    if (!bills)
      return res.status(404).json({ Message: "No bills for current user" });

    return res.status(201).json({ bills });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const deleteBill = async (req, res) => {
  try {
    const billId = req.params.id;
    const user_idBill = req.params.user_id;

    const bill = await Bill.deleteOne({ _id: billId });
    if (!bill) {
      return res.status(404).json({ error: "Bill not found" });
    }
    return res.status(200).json({ message: "Bill deleted successfully" });
  } catch (e) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  deleteBill,
  createBill,
  updateBill,
  getBill,
  getAllBills,
};
