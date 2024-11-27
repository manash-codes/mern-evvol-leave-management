import Leaves from "../model/Leave.model.js";
import mongoose from "mongoose";


const getLeaves = async (req, res) => {
    try {
        const leaves = await Leaves.find();
        return res.status(200).json(leaves);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const applyLeave = async (req, res) => {
    try {
        const { leave } = req.body;

        // specified to update only one document as we have one user only 
        const leaves = await Leaves.updateOne(
            { _id: leave[0]._id }, { $set: leave[0] });

        return res.status(200).json(leaves);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export { getLeaves, applyLeave }