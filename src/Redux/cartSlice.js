import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk("ProSlice/getData", async () => {
  let response = await fetch("https://fakestoreapi.com/products");
  response = await response.json();
  return response;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    isloading: false,
    error: null,
  },

  reducers: {
    addToCart: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeItem;
    },
    incremntQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      itemPresent.quantity++;
    },
    decrementQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent.quantity === 1) {
        const removeItem = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = removeItem;
      } else {
        itemPresent.quantity--;
      }
    },
    CleartheCart: (state) => {
      state.cart = [];
    },
  },
  extraReducers: {
    [getProduct.pending]: (state) => {
      state.isloading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      return {
        ...state,
        users: action.payload,
        isloading: false,
      };
    },
    [getProduct.rejected]: () => {
      //  console.log("rejected")
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  incremntQuantity,
  CleartheCart,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

//  how to use createAsynThunk with api in toolkit?
