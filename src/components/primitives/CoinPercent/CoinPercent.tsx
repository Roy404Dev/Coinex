import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./CoinPercent.scss";

type coinPercentType = {
  percent: number;
  name: string;
  style: React.CSSProperties;
  pathClr?: string;
  trailClr?: string;
};

const CoinPercent = ({
  percent,
  name,
  style,
  pathClr,
  trailClr,
}: coinPercentType) => {
  return (
    <article className="wallet-coin-percentage">
      <div className="wallet-coin-percentage__left">
        <div style={style}>
          <CircularProgressbar
            value={percent}
            styles={buildStyles({
              pathColor: pathClr,
              trailColor: trailClr,
            })}
          />
        </div>
        <span className="wallet-coin-percent">{percent}%</span>
      </div>
      <div className="wallet-coin-percentage__right">
        <span className="wallet-coin-name">{name}</span>
        <button className="ellipsis-btn">
          <img src="assets/interface/Ellipsis.svg" alt="show more" />
        </button>
      </div>
    </article>
  );
};

export default CoinPercent;
