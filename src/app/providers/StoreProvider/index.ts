import { StoreProvider } from './ui/StoreProvider'
import { createReduxStore, type AppThunkDispatch } from './config/store'
import {
    type StateSchema,
    type ReduxStoreWithManager,
    type StateSchemaKey,
    type ThunkConfig,
} from './config/StateSchema'

export {
    StoreProvider,
    createReduxStore,
    type StateSchema,
    type ReduxStoreWithManager,
    type StateSchemaKey,
    type ThunkConfig,
    type AppThunkDispatch,
}
