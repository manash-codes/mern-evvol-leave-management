interface Leave {
    _id: string;
    name: string;
    sickLeave: number;
    casualLeave: number;
    earnedLeave: number;
    totalLeaves: number;
    totalAvailedLeaves: number;
    balance: number;
    reason: string;
}

type LeaveType = "casualLeave" | "sickLeave" | "earnedLeave";

export type { Leave, LeaveType };