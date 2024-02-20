import { supabase } from "../supabaseClient";

export const getUserWallets = async (userId: string) => {
  // Fetch user wallets using userData
  const response = await supabase
    .from("wallets")
    .select()
    .eq("user_id", userId);
  return response;
};

export const getUserTransactions = async (userId: string) => {
  const response = await supabase
    .from("transactions")
    .select()
    .eq("user_id, reciever_id", userId);
  return response;
};

export const getUserData = async () => {
  // Fetch user data directly from supabase
  const response = await supabase.from("profiles").select(`
    wallets (currency, amount, hash)
  `);
  return response;
};
