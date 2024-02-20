import { ComboboxDemo } from "@/components/ComboBox";
import "./Transaction.scss";
import { useMutation } from "react-query";
import { PostTransaction } from "@/api/methods/PostData";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Transaction = () => {
  const frameworks = [
    {
      value: "btc",
      label: "BTC",
    },
    {
      value: "eth",
      label: "ETH",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];
  const transactionScheme = z.object({
    reciever_id: z.string().uuid(),
    // amount: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    //   message: "Expected number, received a string",
    // }),
    amount: z.number().max(9999),
  });

  type transactionScheme = z.infer<typeof transactionScheme>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<transactionScheme>({
    resolver: zodResolver(transactionScheme),
  });

  const userData = useSelector((state: RootState) => state.user.data);

  const { mutateAsync: addPostTransactionMutation } = useMutation({
    mutationFn: PostTransaction,
  });

  const isEmpty = (value: string | null | undefined) => {
    return value == null || value.trim() === "";
  };

  return (
    <section className="transaction">
      <div className="transaction-wrapper">
        <form
          className="transaction-form"
          onSubmit={handleSubmit((data) =>
            addPostTransactionMutation({
              user_id: userData.id,
              reciever_id: userData.id,
              amount: data.amount,
              coin: "btc",
            })
          )}
        >
          <div className="transaction-wallet transaction-el">
            <span>Wallet</span>
            <ComboboxDemo listOfCoins={frameworks} default="btc" />
          </div>
          <div className="transaction-amount transaction-el">
            <span>Amount</span>
            <input
              type="number"
              className="transaction-amount-input"
              { ...register('amount', { valueAsNumber: !isEmpty("amount") } ) }
            />
            {errors.amount && (
              <span className="error-message">{errors.amount.message}</span>
            )}
          </div>
          <div className="transaction-sendto transaction-el">
            <span>Send to</span>

            <input
              type="text"
              className="transaction-reciever-id"
              placeholder="Enter sender id"
              {...register("reciever_id")}
            />

            {errors.reciever_id && (
              <span className="error-message">
                {errors.reciever_id.message}
              </span>
            )}
          </div>

          <button className="send-btn">send</button>
        </form>
      </div>
    </section>
  );
};

export default Transaction;
