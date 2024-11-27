import axios from "axios";
import { APPURL } from "../constants";
import { Leave } from "../types/Leave";

const getLeaves = async () => {
    return await axios.get(`${APPURL}/leaves`);
}

const applyLeave = async (leave: Leave[]) => {
    return await axios.patch(`${APPURL}/leaves/apply`, { leave })
}

export { getLeaves, applyLeave } 