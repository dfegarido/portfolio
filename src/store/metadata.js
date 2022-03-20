import { createSlice } from '@reduxjs/toolkit'

export const metadata = createSlice({
  name: 'metadata',
  initialState: {
    firstname: '',
    lastname: '',
    windowHeight: '',
    scrollTop: '',
  },
  reducers: {
    setWindowHeight: (state, { payload }) => {
      state.windowHeight = payload + 200
    },
    setScrollTop: (state, { payload }) => {
      state.scrollTop = payload
    },
    firstName: (state, { payload }) => {
      state.firstname = payload
    },
    lastName: (state, { payload }) => {
      state.lastname = payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { firstName, lastName, setWindowHeight, setScrollTop } = metadata.actions

export default metadata.reducer