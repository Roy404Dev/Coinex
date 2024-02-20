import Wallets from "@/components/Wallets/Wallets";
import "./Dashboard.scss";
import WalletPercentages from "@/components/layout/WalletPercentages/WalletPercentages";
import Transaction from "@/components/layout/Transaction/Transaction";
import Transactions from "@/components/layout/Transactions/Transactions";
import ChartPreview from "@/components/layout/ChartPreview/ChartPreview";
import Markets from "@/components/layout/Markets/Markets";
import News from "@/components/layout/News/News";
import WalletInfo from "@/components/layout/WalletInfo/WalletInfo";
import attentionIcon from '@/assets/icons/informative/attentionIcon.svg';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const Dashboard = () => {
  //TODO GET USER DATA remove imports
  //TODO BUG when register
  const userData = useSelector((state: RootState) => state.user);
  return (
    <div className="dashboard">
      <div className="dashboard-wrapper">
        <div className="dashboard-top">
          <div className="dashboard-top__left">
            <Link to="/">
              <span className="dashboard-title">Dashboard</span>
            </Link>
            <div className="search-input-wrapper" tabIndex={0}>
              <input id="search-input-id" type="text" placeholder="Search…" />
              <img
                className="search-icon-img"
                src="assets/interface/searchIcon.svg"
                alt="search icon"
              />
            </div>
            <div className="dashboard-header-button-group">
              <button className="support-btn" aria-label="support button">
                <img
                  className="attentionIcon"
                  src={attentionIcon}
                  alt="Attention icon"
                />
                <span>Support</span>
              </button>
              <div className="add-btn">
                <span>+</span>
              </div>
            </div>
          </div>
          <div className="dashboard-top__right">
            <div className="hamburger-menu">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <span className="dashboard-top-name">
              {userData.data.user_metadata.name}
            </span>
            <button className="user-tab" aria-label="user tab">
              <img
                src="assets/interface/userPlaceholder.svg"
                alt="user profile"
              />
            </button>
          </div>
          <div className="dashboard-top__right-mobile">
            <span>Overview</span>
            <button className="overview-btn" aria-label="overview tab">
              <img src="assets/interface/Ellipsis.svg" alt="ellipsis icon" />
            </button>
          </div>
        </div>
        <div className="dashboard-wrapper-grid">
          <WalletInfo />
          <Wallets />
          <WalletPercentages />
          <Transaction />
          <Transactions />
          <ChartPreview />
          <Markets />
          <News />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
