import { compose, configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});