import { createSlice } from "@reduxjs/toolkit";
import { User } from "@supabase/supabase-js";

interface UserSliceState {
  data: User;
}

const initialState: UserSliceState = {
  data: {
    id: "",
    aud: "",
    role: "",
    email: "",
    email_confirmed_at: "",
    phone: "",
    confirmation_sent_at: "",
    confirmed_at: "",
    last_sign_in_at: "",
    app_metadata: {
      provider: "",
      providers: [""],
    },
    user_metadata: {
      name: "",
    },
    identities: [
      {
        identity_id: "",
        id: "",
        user_id: "",
        identity_data: {
          email: "",
          email_verified: null,
          phone_verified: null,
          sub: "",
        },
        provider: "",
        last_sign_in_at: "",
        created_at: "",
        updated_at: "",
      },
    ],
    created_at: "2024-02-01T16:57:33.479008Z",
    updated_at: "2024-02-05T18:47:54.080218Z",
  },
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.data = { ...action.payload.user };
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
