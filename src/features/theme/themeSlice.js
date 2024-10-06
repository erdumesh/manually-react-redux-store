import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    color : 'white'
}
export const themeSlice = createSlice({
    name: 'theme',
    initialState : initialStateValue,
    reducers: {
      changecolor: (state, action) => {
        state.color = action.payload
      },
    },
  })
  
  export const { changecolor } = themeSlice.actions
  export default themeSlice.reducer