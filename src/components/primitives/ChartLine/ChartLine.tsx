import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  // Title,
  Tooltip,
  // Legend,
} from "chart.js";
import "./ChartLine.scss";
import btcPrices from "../../../api/data/btcPrices";
import { Line } from "react-chartjs-2";

type chartLineType = {
  color: string;
};

const ChartLine = ({ color }: chartLineType) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
  );
  ChartJS.register(LineElement, Tooltip);
  const btcData = btcPrices.prices.map((data) => {
    return data[1];
  });

  const maxValue = Math.max(...btcData);
  const minValue = Math.min(...btcData);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {},
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
        max: maxValue / 1.5,
        min: minValue,
      },
    },
    elements: {
      line: {
        tension: 0, // or any other line options you want to include
      },
    },
  };

  const data = {
    labels: [...btcData.splice(100)],
    datasets: [
      {
        label: "Bitcoin Price",
        data: btcData,
        fill: false,
        borderColor: color,
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  return (
    <section className="chart-line">
      <Line options={options} data={data} />
    </section>
  );
};

export default ChartLine;
