import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
// import additionalMiddleware from 'additional-middleware'
// import logger from 'redux-logger'
// @ts-ignore
// import untypedMiddleware from 'untyped-middleware'
import customersReducer from '../features/Customer/customerSlice'

const reducer = combineReducers({
  customers: customersReducer 
})

const store = configureStore({
  reducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store