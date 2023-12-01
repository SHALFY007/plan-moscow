import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  valueFirst: 0,
  valueSecond: 0,
  valueThird: 0
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
    setCountThird: (state, action) => {
      state.valueThird = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCountFirst, setCountSecond, setCountThird } = counterSlice.actions

export default counterSlice.reducer