import { TABLEHEADER } from '../constants';
import { Leave } from '../types/Leave';


const Table = ({ leavesData }: { leavesData?: Leave[] }) => {
    const TableHead = ({ title }: { title: string }) =>
        <th className="px-4 py-2">{title}</th>

    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full text-center">
                <thead className="bg-gray-100">
                    <tr>
                        {TABLEHEADER.map((title) =>
                            <TableHead key={title} title={title} />)}
                    </tr>
                </thead>
                <tbody>
                    {
                        leavesData?.map((leave) => (
                            <tr key={leave._id}>
                                <td className="px-4 py-2">{leave.name}</td>
                                <td className="px-4 py-2">{leave.sickLeave}</td>
                                <td className="px-4 py-2">{leave.casualLeave}</td>
                                <td className="px-4 py-2">{leave.earnedLeave}</td>
                                <td className="px-4 py-2">{leave.totalLeaves}</td>
                                <td className="px-4 py-2">{leave.totalAvailedLeaves}</td>
                                <td className="px-4 py-2">{leave.balance}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table