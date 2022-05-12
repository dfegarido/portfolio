import { createSlice } from '@reduxjs/toolkit'

export const metadata = createSlice({
  name: 'metadata',
  initialState: {
    firstname: '',
    lastname: '',
    windowHeight: '',
    windowWidth: '',
    scrollTop: '',
    isMobile: false,

    listRef: {
      homeRef: '',
      aboutRef: '',
      serviceRef: '',
      worksRef: '',
      blogRef: '',
      contactRef: '',
    },
    
  },
  reducers: {
    setIsMobile: (state, { payload }) => {
      state.isMobile = payload
    },
    setWindowHeight: (state, { payload }) => {
      state.windowHeight = payload + 200
    },
    setWindowWidth: (state, { payload }) => {
      state.windowWidth = payload
    },
    setScrollTop: (state, { payload }) => {
      state.scrollTop = payload
    },
    firstName: (state, { payload }) => {
      state.firstname = payload
    },
    lastName: (state, { payload }) => {
      state.lastname = payload
    },
    setReference: (state, { payload }) => {
      state.listRef[payload.name] = payload.value
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  firstName, 
  lastName, 
  setWindowHeight, 
  setScrollTop, 
  setReference, 
  setWindowWidth, 
  setIsMobile 
} = metadata.actions

export default metadata.reducer