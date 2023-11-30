import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  valueFirst: 0,
  valueSecond: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCountFirst: (state, action) => {
      state.valueFirst = action.payload
    },
    setCountSecond: (state, action) => {
      state.valueSecond = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCountFirst, setCountSecond } = counterSlice.actions

export default counterSlice.reducer