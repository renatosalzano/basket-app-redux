import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pendings: [],
  purchased: [],
  isClear: false,
};

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

export const selectPendings = (state) => state.basket.pendings;
export const selectPurchased = (state) => state.basket.purchased;
export const selectIsClear = (state) => state.basket.isClear;

export default basketSlice.reducer;
