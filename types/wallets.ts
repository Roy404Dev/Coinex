import { Database } from "./supabase";

export type Wallets = Database["public"]["Tables"]["wallets"]["Row"]