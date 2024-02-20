import MarketElement from "@/components/primitives/MarketElement/MarketElement";
import "./Markets.scss";
import { useDragScroll } from "@/hooks/useDragScroll";
const Markets = () => {
  const [ref] = useDragScroll();
  return (
    <section className="markets custom-scroll-bar-green" ref={ref}>
      <div className="markets-header">
        <span className="section-title">Markets</span>
        <ul className="markets-selection-list">
          <li className="markets-select-el">
            <button className="markets-select-btn">USD</button>
          </li>
          <li className="markets-select-el">
            <button className="markets-select-btn markets-select-btn-selected">
              EUR
            </button>
          </li>
          <li className="markets-select-el">
            <button className="markets-select-btn">BTC</button>
          </li>
        </ul>
      </div>
      <MarketElement
        currency="EUR"
        coinMarketData={null}
        coinName="BTC"
        growth={10}
        coinPrice={100}
      />
      <MarketElement
        currency="EUR"
        coinMarketData={null}
        coinName="BTC"
        growth={-1}
        coinPrice={100}
      />
      <MarketElement
        currency="EUR"
        coinMarketData={null}
        coinName="BTC"
        growth={5}
        coinPrice={100}
      />
      <MarketElement
        currency="EUR"
        coinMarketData={null}
        coinName="BTC"
        growth={10}
        coinPrice={100}
      />
      <MarketElement
        currency="EUR"
        coinMarketData={null}
        coinName="BTC"
        growth={10}
        coinPrice={100}
      />
    </section>
  );
};

export default Markets;
