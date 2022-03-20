import { createSlice } from '@reduxjs/toolkit'

export const metadata = createSlice({
  name: 'metadata',
  initialState: {
    firstname: '',
    lastname: '',
  },
  reducers: {
    firstName: (state, { payload }) => {
      state.firstname = payload
    },
    lastName: (state, { payload }) => {
      state.lastname = payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { firstName, lastName } = metadata.actions

export default metadata.reducer