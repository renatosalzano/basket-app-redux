import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import asyncDeleteItem from "./asyncDeleteItem";

interface AppState {
  pendings: any[];
  purchased: any[];
  isClear: boolean;
  status: "idle" | "loading";
}

const initialState: AppState = {
  pendings: [],
  purchased: [],
  isClear: false,
  status: "idle",
};

export const asyncDelete = createAsyncThunk("basket/delete", async (item: any) => {
  const response = await asyncDeleteItem(item);
  return response;
});

export const basketSlice = createSlice({
  name: "basket",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      // if double increment count
      if (state.pendings.some((item) => item.name === action.payload.name)) {
        state.pendings.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, count: item.count++ };
          }
          return item;
        });
      } else {
        state.pendings = [...state.pendings, { ...action.payload, count: 1 }];
      }
    },
    removeItem: (state, action) => {
      state.pendings = state.pendings.filter((item) => {
        return item.name !== action.payload.name;
      });
    },
    incrementQuantity: (state, action) => {
      state.pendings.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, count: item.count++ };
        }
        return item;
      });
    },
    reduceQuantity: (state, action) => {
      state.pendings.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          return { ...item, count: item.count-- };
        }

        return item;
      });
    },
    buyProduct: (state, action) => {
      console.log(action.payload);
      const time = new Date().toISOString();
      const obj = { date: time, products: action.payload };
      state.pendings = [];
      if (state.purchased.length > 0) {
        state.purchased = [obj, ...state.purchased];
      } else {
        state.purchased = [obj];
      }
    },
    clearPendings: (state) => {
      state.pendings = [];
    },
    toggleClear: (state) => {
      state.isClear = !state.isClear;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncDelete.pending, (state) => {
        state.status = "loading";
      })
      .addCase(asyncDelete.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "idle";
        state.pendings = state.pendings.filter((item) => {
          return item.name !== action.payload.name;
        });
      });
  },
});

export const {
  addItem,
  removeItem,
  incrementQuantity,
  reduceQuantity,
  buyProduct,
  clearPendings,
  toggleClear,
} = basketSlice.actions;

export const selectPendings = (state: any) => state.basket.pendings;
export const selectPurchased = (state: any) => state.basket.purchased;
export const selectIsClear = (state: any) => state.basket.isClear;
export const selectStatus = (state: any) => state.basket.status;

export default basketSlice.reducer;
