import TransactionLog from "@/components/primitives/TransactionLog/TransactionLog";
import "./Transactions.scss";
import { useDragScroll } from "@/hooks/useDragScroll";
import { useQuery } from "react-query";
import { getUserTransactions } from "@/api/data/getUserData";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

//TODO GET TRANSACTIONS FROM DB
const Transactions = () => {
  const userData = useSelector((state: RootState) => state.user.data);
  const [ref] = useDragScroll();
  const { data, isError } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => getUserTransactions(userData.id),
  });
  return (
    <section className="transactions custom-scroll-bar-green" ref={ref}>
      <div className="transactions-top">
        <span className="section-title">Transactions</span>
        <ul className="transactions-filter-methods">
          <li className="transactions-filter-method">
            <button className="filter-all-btn filter-all-btn-selected">
              ALL
            </button>
          </li>
          <li className="transactions-filter-method">
            <button className="filter-send-btn">SEND</button>
          </li>
          <li className="transactions-filter-method">
            <button className="filter-recent-btn">RECENT</button>
          </li>
        </ul>
      </div>
      <div className="transactions-list">
        {isError && (<span>error while fetching transactions</span>)}
        {data &&
          data.data?.map((element) => {
            // Parse the date string into a Date object
            const date = new Date(element.created_at);

            // Format the date to format
            const formattedDate = `${("0" + date.getUTCHours()).slice(-2)}:${(
              "0" + date.getUTCMinutes()
            ).slice(-2)}, ${("0" + date.getUTCDate()).slice(
              -2
            )} ${date.toLocaleString("default", {
              month: "short",
            })} ${date.getUTCFullYear()}`;

            return (
              <TransactionLog
                key={element.id}
                amount={element.amount}
                coinName={element.coin_name}
                isRecieved={element.reciever_id === userData.id}
                date={formattedDate}
                transactionId={element.id}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Transactions;
