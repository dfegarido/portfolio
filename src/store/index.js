import { configureStore } from '@reduxjs/toolkit'
import metadata from './metadata'

export default configureStore({
  reducer: {
    metadata,
  },
})