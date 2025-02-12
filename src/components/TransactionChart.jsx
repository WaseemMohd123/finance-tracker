// ✅ Import statements must be at the top
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const TransactionChart = () => {
    const data = {
        labels: ["Food", "Rent", "Transport", "Entertainment"],
        datasets: [
            {
                label: "Expenses",
                data: [500, 1200, 300, 400],
                backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
        ],
    };

    return <Bar data={data} />;
};

export default TransactionChart;
