import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RepositoryFactory } from '../../repositories/RepositoryFactory'
import * as Model from '../../models'

const customerRepository = RepositoryFactory.get('customers')

export const fetchCustomers = createAsyncThunk(
  'store/customers/fetch',
  async () => {
    const { data } = await customerRepository.get<Model.Api.CustomerGetResult>()
    const customers = data.list.map((l) => Model.Customer.createFromApi(l))
    return customers
  }
)

interface CustomerState {
  customers: Model.Customer[] | null
}

const initialState: CustomerState = {
  customers: null,
}

const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCustomers.pending, (state, action) => {
      console.log(state.customers, action.payload)
    })
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      state.customers = action.payload
    })
  },
})

export default customerSlice.reducer
