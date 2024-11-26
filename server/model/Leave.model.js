import { model, Schema } from "mongoose";

const leaveSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    sickLeave: {
        type: Number,
        default: 0,
    },
    earnedLeave: {
        type: Number,
        default: 0,
    },
    totalNumberOfLeaves: {
        type: Number,
        default: 0
    },
    totalNumberOfAvailedLeaves: {
        type: Number,
        default: 0
    },
    balance: {
        type: Number,
        default: function () {
            return this.totalNumberOfLeaves - this.totalNumberOfAvailedLeaves;
        }
    }
});

export default model("Leaves", leaveSchema);