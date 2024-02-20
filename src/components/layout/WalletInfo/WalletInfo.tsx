import './WalletInfo.scss';
const WalletInfo = () => {
  return (
    <div className="dashboard-wallet-info">
      <div className="dashboard-wallet-info__transactions">
        <span className="transactions-count">2,345 </span>
        <span className="dashboard-transactions-title">Transactions</span>
      </div>
      <div className="dashboard-wallet-info__wallets">
        <div className="dashboard-wallet-info__wallets__wrapper">
          <span className="dashboard-wallet-info__wallets__wallet-amount">
            5
          </span>
          <span className="dashboard-wallet-info-title">Wallets</span>
        </div>
      </div>
      <div className="dashboard-wallet-info__currentBalance">
        <span className="dashboard-current-balance-title">Current balance</span>
        <span className="balance-amount">3.4330</span>
      </div>
      <div className="dashboard-wallet-info__gained">
        <div className="dashboard-wallet-info__gained__amount">
          <span>2.7995 EUR</span>
          <span>+12%</span>
        </div>
        <button className="buyBtn-outline">buy</button>
      </div>
    </div>
  );
};

export default WalletInfo;
