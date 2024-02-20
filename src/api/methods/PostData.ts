import { supabase } from "../supabaseClient";
import { v4 as uuidv4 } from "uuid";

type PostTransactionType = {
  user_id: string,
  reciever_id: string,
  amount: number,
  coin: string,
}


export const PostTransaction = async ({ user_id, reciever_id, amount, coin }: PostTransactionType) => {
  console.log('call');
  const response = supabase.from("transactions").insert({
    id: uuidv4(),
    created_at: new Date().toISOString(),
    user_id: user_id,
    reciever_id: reciever_id,
    amount: amount,
    coin_name: coin
  });
  return response;
};
