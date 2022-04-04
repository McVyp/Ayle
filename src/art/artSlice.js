import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    arts: ["Home", "Explore", "Trending", "Recommended"]
}

const artSlice = createSlice({
    name: "art",
    initialState,
    reducers: {}
})

export const selectArts = state => state.art.arts

export default artSlice.reducer