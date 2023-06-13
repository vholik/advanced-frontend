import { useDispatch } from 'react-redux'

import { type AppThunkDispatch } from '@/app/providers/StoreProvider'

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
