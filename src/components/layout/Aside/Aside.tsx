import logo from "/logo.svg";
import "./Aside.scss";
import { useState } from "react";
import Tab from "./Tab/Tab";
const Aside = () => {
  const [selectedTab, setSelectedTab] = useState("0");

  const toggleTab = (
    e: React.MouseEvent<HTMLLIElement | HTMLButtonElement>
  ) => {
    setSelectedTab(e.currentTarget.getAttribute("data-select-index") || "");
  };

  return (
    <aside className="aside">
      <div className="aside-column">
        <img className="aside-logo" src={logo} alt="logo icon" />
        <ul className="aside-column-tabs">
          <Tab
            imgSrc="assets/tabs/dashboardIcon.svg"
            onClickFn={toggleTab}
            index="0"
            selected={selectedTab}
            link="/dashboard"
          />
          <Tab
            imgSrc="assets/tabs/walletsIcon.svg"
            onClickFn={toggleTab}
            index="1"
            selected={selectedTab}
            link="/dashboard/wallet"
          />
          <Tab
            imgSrc="assets/tabs/marketsIcon.svg"
            onClickFn={toggleTab}
            index="2"
            selected={selectedTab}
            link="/dashboard/markets"
          />
          <Tab
            imgSrc="assets/tabs/eventsIcon.svg"
            onClickFn={toggleTab}
            index="3"
            selected={selectedTab}
            link="/dashboard/events"
          />
          <Tab
            imgSrc="assets/tabs/transactionsIcon.svg"
            onClickFn={toggleTab}
            index="4"
            selected={selectedTab}
            link="/dashboard/trading"
          />
          <Tab
            imgSrc="assets/tabs/calculatorIcon.svg"
            onClickFn={toggleTab}
            index="5"
            selected={selectedTab}
            link="/dashboard/calculator"
          />
          <Tab
            imgSrc="assets/tabs/newsIcon.svg"
            onClickFn={toggleTab}
            index="6"
            selected={selectedTab}
            link="/dashboard/crypto-news"
          />
          <Tab
            imgSrc="assets/tabs/settingsIcon.svg"
            onClickFn={toggleTab}
            index="7"
            selected={selectedTab}
            link="/dashboard/settings"
          />
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
