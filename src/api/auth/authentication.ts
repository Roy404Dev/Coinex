import { supabase } from "../supabaseClient";
type signupProps = {
  email: string;
  name: string;
  password: string;
};

type loginProps = {
  email: string;
  password: string;
};


export const signupUser = async (credentials: signupProps) => {
  const { data, error } = await supabase.auth.signUp({
    email: credentials.email,
    password: credentials.password,
    options: {
      data: {
        name: credentials.name,
      },
    },
  });
  return { data, error };
};

export const logInUser = async (credentials: loginProps) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password,
  });
  return { data, error };
};
