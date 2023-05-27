import { type AppThunkDispatch } from 'app/providers/StoreProvider'
import { useDispatch } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
