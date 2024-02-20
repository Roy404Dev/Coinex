import { useState } from "react";
import CoinCard from "../primitives/CoinCard/CoinCard";
import "./Wallets.scss";
import { useDragScroll } from "@/hooks/useDragScroll";
import { useQuery } from "react-query";
import { getUserWallets } from "@/api/data/getUserData";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const Wallets = () => {
  const [ref] = useDragScroll();
  const [toggle, setToggle] = useState(1);
  const userData = useSelector((state: RootState) => state.user.data);
  const { data, error, isLoading } = useQuery({
    queryKey: ["wallets"],
    queryFn: () => getUserWallets(userData.id),
    staleTime: 60 * 60 * 1000,
  });

  if (isLoading) {
    return <span>Loading</span>;
  }

  if(error) {
    return <span>error</span>
  }

  return (
    <div className="wallets">
      <section className="wallets-wrapper">
        <div className="wallets-top">
          <span>My wallets</span>
          <button className="add-wallet-btn">Add wallet</button>
        </div>
        <div className="wallet-coins custom-scroll-bar-green" ref={ref}>
          {data &&
            data.data?.map((item, index) => (
              <CoinCard
                name={item.coin_fullname}
                shortName={item.coin_name}
                amount={item.amount}
                pos={index}
                setToggle={setToggle}
                toggle={toggle}
                key={index}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default Wallets;
