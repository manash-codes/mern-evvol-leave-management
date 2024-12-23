import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { useLeave } from "../hooks/useLeave";
import { Leave, LeaveType } from "../types/Leave";
import { applyLeave } from "../api/leaveRoute";

const ApplyLeaveForm = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const { leavesData } = useLeave()
    const navigate = useNavigate();

    const handleStartDate = (date: Date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (date.getTime() < today.getTime()) {
            alert("Start date cannot be in the past");
            setStartDate(new Date());
            return;
        }
        setStartDate(date);
    }

    const handleEndDate = (date: Date) => {
        date.setHours(0, 0, 0, 0);
        if (date < startDate!) {
            alert("End date cannot be before start date");
            setEndDate(null);
            return;
        }
        setEndDate(date);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!startDate && !endDate) {
            return;
        }

        const leaveType = e.currentTarget.leaveType.value;
        const dateDiff = endDate!.getDate() - startDate!.getDate();
        const diff = dateDiff ? dateDiff : dateDiff + 1;

        leavesData!.map((leave: Leave) => {
            leave[leaveType as LeaveType] += diff
            leave.totalAvailedLeaves += diff
            leave.balance = leave.totalLeaves - leave.totalAvailedLeaves
        })

        applyLeave(leavesData!)

        setStartDate(null);
        setEndDate(null);
        navigate('/');
    }


    const cancelLeave = () => {
        setStartDate(null);
        setEndDate(null);
        navigate('/');
    }

    return (
        <div className="max-w-lg mt-4">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-2 mb-3">
                    <label className="text-lg py-2" htmlFor="leave-type">Leave Type</label>
                    <select name="leaveType" id="leave-type"
                        className="p-2 text-lg border rounded">
                        <option value="sickLeave">Sick Leave</option>
                        <option value="casualLeave">Casual Leave</option>
                        <option value="earnedLeave">Earned Leave</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                    <label className="text-lg py-2" htmlFor="start-date">Start Date</label>
                    <DatePicker
                        selected={startDate}
                        dateFormat={"dd/MM/yyyy"}
                        onChange={(date) => handleStartDate(date as Date)}
                        name="startDate" id="start-date"
                        className="p-2 w-full text-lg border rounded" />
                </div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                    <label className="text-lg py-2" htmlFor="end-date">End Date</label>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => handleEndDate(date as Date)}
                        dateFormat={"dd/MM/yyyy"}
                        name="endDate" id="end-date"
                        className="p-2 w-full text-lg border rounded" />
                </div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                    <label className="text-lg py-2" htmlFor="reason">Reason</label>
                    <textarea name="reason" id="reason" cols={30} rows={3}
                        className="p-2 text-lg border rounded"
                        placeholder="Reason for leave"></textarea>
                </div>
                <div className="flex gap-2 mt-4">
                    <button type="submit" className="px-4 py-2 border hover:bg-gray-300 rounded-md w-full">Save</button>
                    <button onClick={cancelLeave} type="submit" className="px-4 py-2 border hover:bg-red-300 rounded-md w-full">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default ApplyLeaveForm;
