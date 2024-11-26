import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

Chart.register(CategoryScale);

import { useState } from "react";
import { Link } from "react-router-dom";
import Table from "./Table";

const Dashboard = () => {
    const [chartData] = useState({
        labels: ["Sick Leaves", "Casual Leaves", "Earned Leaves"],
        datasets: [{
            data: [10, 5, 20],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }]
    })

    return (
        <div className="container max-w-7xl mx-auto py-5">
            <h1 className="text-2xl font-bold">Dashboard page</h1>
            <div className="flex justify-end my-2">
                <Link to={'/apply-leave'} className="px-4 py-2 border hover:bg-gray-200 rounded-md">Apply Leave</Link>
            </div>

            <Table />

            <div className="w-1/3 mt-4 mb-2 border mx-auto">
                <Pie data={chartData} options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom',
                        },
                        title: {
                            display: true,
                            text: 'Leaves',
                            position: 'top',
                            font: {
                                size: 20
                            }
                        }
                    }
                }} />
            </div>
        </div>
    )
}

export default Dashboard
