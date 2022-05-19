import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    activeCurrency: "USD",
    currencyDiffs: {
      USD: 1,
      EUR: 0.9,
      TRY: 12,
    },
    searchActive: false,
    search: "",
    activeCategory: "",
    items: [
      {
        name: "iPhone X",
        price: 999.99,
        category: "mobile",
        image:
          "https://cdn03.ciceksepeti.com/cicek/kc1887356-1/XL/apple-iphone-x-telefon-kilifi-kisiye-ozel-kc1887356-1-35af983b3977429ebb2df052fc88746d.jpg",
      },
      {
        name: "iPhone 11",
        price: 1099.99,
        category: "mobile",
        image:
          "https://cdn03.ciceksepeti.com/cicek/kc1887356-1/XL/apple-iphone-x-telefon-kilifi-kisiye-ozel-kc1887356-1-35af983b3977429ebb2df052fc88746d.jpg",
      },
      {
        name: "iPhone 12",
        price: 1199.99,
        category: "mobile",
        image:
          "https://cdn03.ciceksepeti.com/cicek/kc1887356-1/XL/apple-iphone-x-telefon-kilifi-kisiye-ozel-kc1887356-1-35af983b3977429ebb2df052fc88746d.jpg",
      },
      {
        name: "iMac",
        price: 2999.99,
        category: "computer",
        image:
          "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/109686-1_large.jpg",
      },
      {
        name: "iMac 24”",
        price: 3999.99,
        category: "computer",
        image:
          "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/109686-1_large.jpg",
      },
      {
        name: "Playstation 4",
        price: 199.99,
        category: "gaming",
        image:
          "https://productimages.hepsiburada.net/s/25/375/10109651812402.jpg",
      },
      {
        name: "Playstation 5",
        price: 299.99,
        category: "gaming",
        image:
          "https://kiralabunu.com/wp-content/uploads/2020/12/Sony-Playstation-5-2.jpg",
      },
    ],
    cart: [],
  },
  reducers: {
    changeCurrency(state, action) {
      state.activeCurrency = action.payload;
    },
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    removeItemFromCart(state, action) {
      state.cart.splice(action.payload, 1);
    },
    emptyCart(state) {
      state.cart = [];
    },
    changeCategory(state, action) {
      state.activeCategory = action.payload;
      state.search = "";
      state.searchActive = false;
    },
    searchItems(state, action) {
      if (action.payload !== "") {
        state.searchActive = true;
        state.search = action.payload;
      } else {
        state.searchActive = false;
        state.search = "";
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeCurrency,
  addToCart,
  removeItemFromCart,
  emptyCart,
  changeCategory,
  searchItems,
} = storeSlice.actions;

export default storeSlice.reducer;
