import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCount } from "./counterApi";

const initialState = {
  value: 0,
  status: "idle",
};

/* asynchornous fn of update of the state */
export const assignAmount = (amount: number) =>
  createAsyncThunk("counter/fetchCount", async () => {
    console.log("86867867876->" + amount);
    const response:any = await fetchCount(amount);
    return response.data;
  });

export const vv1231121 = createAsyncThunk(
  "team/playerListLoading",
  async (amount: number) => {
    console.log("86867867876->" + amount);
    const response:any = await fetchCount(amount);
    console.log(response)
    return response.data;
  }
);

/* creation of the reducer component */
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  /* reducers: functions related to my store */
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    addAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder

  //       .addCase(assignAmount, (state, action) => {
  //         state.value += action.payload;
  //       });
  //   },
  extraReducers: {

    [vv1231121.fulfilled.type]: (state, action) => {
      state.value += action.payload;
    },

  },
});

//export of the reducer functions/actions
export const { increment, decrement, addAmount } = counterSlice.actions;
//export of the store value
export const selectCount = (state: any) => state.counter.value;
