import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import metadata from './metadata'

export default configureStore({
  reducer: {
    metadata,
  },
  middleware: [
    ...getDefaultMiddleware({
        serializableCheck: false
    }),

  ],
})