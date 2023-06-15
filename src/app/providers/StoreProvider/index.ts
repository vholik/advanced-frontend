import {
    type StateSchema,
    type ReduxStoreWithManager,
    type StateSchemaKey,
    type ThunkConfig,
} from './config/StateSchema'
import { createReduxStore, type AppThunkDispatch } from './config/store'
import { StoreProvider } from './ui/StoreProvider'

export {
    StoreProvider,
    createReduxStore,
    type StateSchema,
    type ReduxStoreWithManager,
    type StateSchemaKey,
    type ThunkConfig,
    type AppThunkDispatch,
}
