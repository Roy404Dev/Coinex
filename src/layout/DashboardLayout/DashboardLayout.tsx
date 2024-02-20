import "./DashboardLayout.scss";
import Aside from "@/components/layout/Aside/Aside";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Header from "../Header/Header";
const DashboardLayout = () => {
  return (
    <div className="DashboardLayout">
      <Header />
      <Aside />
      <Dashboard />
    </div>
  );
};

export default DashboardLayout;
