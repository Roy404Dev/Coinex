import CoinPercent from "../../primitives/CoinPercent/CoinPercent";
import "./WalletPercentages.scss";
const WalletPercentages = () => {
  return (
    <section className="wallet-percentages">
      <div className="wallet-percentages-wrapper">
        <CoinPercent
          percent={55}
          name="bitcoin"
          style={{ height: "28px", width: "28px" }}
          pathClr={`rgba(122, 194, 49, 1)`}
        />
        <CoinPercent
          percent={55}
          name="bitcoin"
          style={{ height: "28px", width: "28px" }}
          pathClr={`rgba(122, 194, 49, 1)`}
        />
        <CoinPercent
          percent={55}
          name="bitcoin"
          style={{ height: "28px", width: "28px" }}
          pathClr={`rgba(122, 194, 49, 1)`}
        />
      </div>
    </section>
  );
};

export default WalletPercentages;
