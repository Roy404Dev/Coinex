import { Link } from "react-router-dom";
import "./Tab.scss";
type tabProps = {
  imgSrc: string;
  onClickFn: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  index: string;
  selected: string;
  link: string;
};

const Tab = ({ imgSrc, onClickFn, index, selected, link }: tabProps) => {
  return (
    <Link to={link}>
      <li
        className={`aside-column-tab${
          selected === index ? " aside-column-tab-selected" : ""
        }`}
        data-select-index={index}
        onClick={(e) => onClickFn(e)}
      >
        <button>
          <img src={imgSrc} alt="aside tab" />
        </button>
      </li>
    </Link>
  );
};

export default Tab;
