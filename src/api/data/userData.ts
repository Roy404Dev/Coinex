import { supabase } from "../supabaseClient";

export const getUserData = async () => {
  const response = await supabase.auth.getUser();
  return response.data;
};
