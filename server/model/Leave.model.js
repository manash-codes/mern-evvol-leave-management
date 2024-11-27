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
    casualLeave: {
        type: Number,
        default: 0,
    },
    totalLeaves: {
        type: Number,
        default: 25
    },
    totalAvailedLeaves: {
        type: Number,
        default: function () {
            return this.sickLeave + this.casualLeave + this.earnedLeave;
        }
    },
    balance: {
        type: Number,
        default: function () {
            return this.totalLeaves - this.totalAvailedLeaves;
        }
    }
});

export default model("Leaves", leaveSchema);