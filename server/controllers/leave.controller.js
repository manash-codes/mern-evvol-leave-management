import Leaves from "../model/Leave.model";
import mongoose from "mongoose";


const getLeaves = async (req, res) => {
    try {
        const leaves = await Leaves.find();
        res.status(200).json(leaves);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } finally {
        mongoose.connection.close();
    }
}

const applyLeave = async (req, res) => {
    const leave = new Leaves(req.body);
    try {
        await leave.save();
        res.status(201).json(leave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export { getLeaves, applyLeave }