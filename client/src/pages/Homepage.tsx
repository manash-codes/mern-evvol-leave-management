import { Link } from 'react-router-dom';
import PieChart from "../components/PieChart";
import Table from '../components/Table';
import { useLeave } from "../hooks/useLeave";

const Homepage = () => {
    const { leavesData, loading } = useLeave();

    return (
        <>
            <h1 className="text-2xl font-bold">Dashboard page</h1>
            <div className="flex justify-end my-2">
                <Link to={'/apply-leave'} className="px-4 py-2 border hover:bg-gray-200 rounded-md">Apply Leave</Link>
            </div>

            {loading ? (
                <p>Loading data...</p>
            ) : (
                leavesData && leavesData.length > 0 ? (
                    <>
                        <Table leavesData={leavesData} />
                        <PieChart leaveTypesData={[leavesData[0].sickLeave, leavesData[0].casualLeave, leavesData[0].earnedLeave]} />
                    </>
                ) : (
                    <p>No leave data available.</p>
                )
            )}
        </>
    )
}

export default Homepage