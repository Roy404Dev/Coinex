import "./TransactionLog.scss";
import greenArrowRight from "@/assets/icons/arrows/greenArrowRight.svg";
import redArrowLeft from "@/assets/icons/arrows/redArrowLeft.svg";

type transactionLogType = {
  date: string;
  transactionId: string;
  amount: number;
  coinName: string;
  isRecieved: boolean;
};

const TransactionLog = ({
  date,
  transactionId,
  amount,
  coinName,
  isRecieved,
}: transactionLogType) => {
  return (
    <div className="transaction-log">
      <div className="transaction-log-top">
        <span className="transaction-log-date">{date}</span>

        <span
          className={
            isRecieved ? "transaction-log-recieved" : "transaction-log-sent"
          }
        >
          <img
            src={isRecieved ? greenArrowRight :  redArrowLeft}
            alt="arrow icon"
          />
          {`${amount} ${coinName}`}
        </span>
      </div>
      <div className="transaction-log-bottom">
        <span className="transaction-hash">{transactionId}</span>
      </div>
    </div>
  );
};

export default TransactionLog;
