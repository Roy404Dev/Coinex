import ChartLine from "../ChartLine/ChartLine";
import "./MarketElement.scss";

type marketElement = {
  currency: string;
  coinName: string;
  coinPrice: number;
  coinMarketData: unknown;
  growth: number;
};

const MarketElement = ({
  currency,
  coinName,
  coinPrice,
  // coinMarketData,
  growth,
}: marketElement) => {
  return (
    <div className="marketElement" data-testid="marketsElementTest">
      <div className="marketElement-left">
        <div className="marketElement-info-row">
          <span className="marketElement-info-currency">
            {coinName}/{currency}
          </span>
          <span className="marketElement-info-growth">{growth}%</span>
        </div>
        <div className="marketElement-info-coinPrice">
          <span className="info-coinPrice">{coinPrice}</span>
          <span className="info-coin-currency">{currency}</span>
        </div>
      </div>
      <div className="marketElement-right">
        <div className="marketElement-info-row">
          <ChartLine color={growth >= 0 ? "rgb(131, 231, 29)" : "rgb(193, 30, 15)"}/>
        </div>
      </div>
    </div>
  );
};

export default MarketElement;
