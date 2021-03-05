import { useDispatch } from 'react-redux'
import { AppDispatch } from '../stores'

// @ts-ignore
export const useAppDispatch = () => useDispatch<AppDispatch>()