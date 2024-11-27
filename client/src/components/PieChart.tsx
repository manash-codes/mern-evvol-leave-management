import { useEffect, useMemo, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

const PieChart = ({ leaveTypesData }: { leaveTypesData: number[] }) => {

    const options = {
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
    } as const;

    const data = useMemo(() => {
        return {
            labels: ["Sick Leaves", "Casual Leaves", "Earned Leaves"],
            datasets: [{
                data: leaveTypesData,
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
            }]
        }
    }, [leaveTypesData]);


    const [chartData, setChartData] = useState(data);

    useEffect(() => {
        setChartData(data);
    }, [data, leaveTypesData])

    return (
        <div className="w-1/3 mt-4 mb-2 border mx-auto">
            <Pie data={chartData} options={options} />
        </div>
    )
}

export default PieChart