import MainHeader from "@/layout/MainHeader/MainHeader";
import { useState } from "react";
import "./Home.scss";
import Footer from "@/layout/Footer/Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
// import { supabase } from "@/api/supabaseClient";
// import { v4 as uuidv4 } from "uuid";
const Home = () => {
  const [slide, setSlide] = useState<string>("0");

  const handleSetSlide = (e: React.ChangeEvent<HTMLElement>) => {
    setSlide(e.target.getAttribute("data-order") ?? "0");
    // const funct = async () => {
    //   const { error } = await supabase.from("wallets").insert({
    //     id: uuidv4(),
    //     created_at: new Date().toISOString(), // Convert to ISO string
    //     user_id: userData.id,
    //     coin_name: "Btc",
    //     coin_fullname: "Bitcoin",
    //     amount: 1000,
    //     hash: uuidv4(),
    //   });
    //   console.log(error);
    // };
    // funct();
  };

  const userData = useSelector((state: RootState) => state.user.data);

  return (
    <main className={`home-page `}>
      <div className={`selected-slide-${slide}`}></div>
      <MainHeader theme="light" />
      <div className="home-page-wrapper">
        <h1 className="home-page-slide-title">
          Exchange between all popular currencies with a couple of clicks
        </h1>
        <ul className="home-page-slides">
          <input
            type="radio"
            className="radio-btn-slide"
            name="slideRadioBtn"
            data-order="0"
            onChange={(e) => handleSetSlide(e)}
          />
          <input
            type="radio"
            className="radio-btn-slide"
            name="slideRadioBtn"
            data-order="1"
            onChange={(e) => handleSetSlide(e)}
          />
          <input
            type="radio"
            className="radio-btn-slide"
            name="slideRadioBtn"
            data-order="2"
            onChange={(e) => handleSetSlide(e)}
          />
          <input
            type="radio"
            className="radio-btn-slide"
            name="slideRadioBtn"
            data-order="3"
            onChange={(e) => handleSetSlide(e)}
          />
        </ul>
        <Link to={userData.email ? "/dashboard" : "/login"}>
          <button className="button-outline">Get a free wallet</button>
        </Link>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
