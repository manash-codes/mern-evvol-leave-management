// src/contexts/LeaveContext.tsx
import { createContext, ReactNode, useEffect, useState } from 'react';
import { getLeaves } from '../api/leaveRoute';
import { Leave } from '../types/Leave';

interface LeaveContextProps {
    leavesData: Leave[] | null;
    loading: boolean;
}

const LeaveContext = createContext<LeaveContextProps | undefined>(undefined);

const LeaveProvider = ({ children }: { children: ReactNode }) => {
    const [leavesData, setLeavesData] = useState<Leave[] | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchLeaves = async () => {
        setLoading(true);
        try {
            const response = await getLeaves();
            if (response.status === 200) {
                setLeavesData(response.data);
            }
        } catch (error) {
            console.error("Failed to fetch leaves data:", error);
            setLeavesData(null);
        } finally {
            setLoading(false);
        }
    };

    // Automatically fetch leaves when the provider is mounted
    useEffect(() => {
        fetchLeaves();
    }, []);

    return (
        <LeaveContext.Provider value={{ leavesData, loading }}>
            {children}
        </LeaveContext.Provider>
    );
};

export { LeaveContext, LeaveProvider };