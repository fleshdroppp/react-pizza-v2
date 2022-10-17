import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCartFromLs } from '../../utils/getCartFromLS';
import { CartItem, CartSliceState } from './types';
import { calcTotalPrice } from '../../utils/calcTotalPrice';

const initialState: CartSliceState = getCartFromLs();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItems = state.items.find((obj) => obj.id === action.payload.id);
      if (findItems) {
        findItems.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItems = state.items.find((obj) => obj.id === action.payload);
      if (findItems) {
        findItems.count--;
        state.totalPrice -= findItems.price;
      }
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, clearItems, removeItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
