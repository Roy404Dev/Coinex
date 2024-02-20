import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import './ChartPreview.scss';
import btcPrices from "../../../api/data/btcPrices";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  zoomPlugin
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Bitcoin Chart",
    },
  },
};
const ChartPreview = () => {
  ChartJS.register(LineElement, Tooltip);
  const btcData = btcPrices.prices.map((data) => {
    return data[1];
  });

  const data = {
    labels: [...btcData],
    datasets: [
      {
        label: "Bitcoin Price",
        data: btcData,
        fill: false,
        borderColor: "rgb(131, 231, 29)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  return (
    <section className="coin-preview" data-testid="chartpreviewtest">
      <Line options={options} data={data} />
    </section>
  );
};

export default ChartPreview;
