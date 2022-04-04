import { configureStore} from '@reduxjs/toolkit';
import artReducer from "../art/artSlice"

export const store = configureStore({
    reducer: {
        art: artReducer
    },
});

export default store