import "./CoinCard.scss";
import btcPlaceholder from "@/assets/BitcoinPlaceholder.svg";
import { Dispatch, SetStateAction } from "react";

type cardProps = {
  name: string;
  shortName: string;
  amount: number;
  setToggle: Dispatch<SetStateAction<number>>;
  pos: number;
  toggle: number;
};


const CoinCard = ({
  name,
  shortName,
  amount,
  setToggle,
  pos,
  toggle,
}: cardProps) => {
  const handleElementClick = () => {
    setToggle(pos);
  };
  return (
    <article
      className={`${
        toggle == pos ? "coin-element-selected coin-element" : "coin-element"
      }`}
      onClick={handleElementClick}
    >
      <span className="coin-short-name">{shortName}</span>
      <img src={btcPlaceholder} alt="#" />
      <span className="coin-element__coin-name">{name}</span>
      <span className="coin-element__coin-amount">{amount}</span>
    </article>
  );
};

export default CoinCard;