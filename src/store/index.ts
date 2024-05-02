import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "store/chat";

const store = configureStore({ reducer: { chat: chatSlice.reducer } });
export default store;
