import { TABLEHEADER } from '../constants'
const Table = () => {
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
                    <tr>
                        <td className="px-4 py-2">John Doe</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">5</td>
                        <td className="px-4 py-2">15</td>
                        <td className="px-4 py-2">30</td>
                        <td className="px-4 py-2">20</td>
                        <td className="px-4 py-2">10</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Jane Doe</td>
                        <td className="px-4 py-2">8</td>
                        <td className="px-4 py-2">3</td>
                        <td className="px-4 py-2">11</td>
                        <td className="px-4 py-2">25</td>
                        <td className="px-4 py-2">14</td>
                        <td className="px-4 py-2">11</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table