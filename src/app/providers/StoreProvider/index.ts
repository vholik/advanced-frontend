import { StoreProvider } from './ui/StoreProvider'
import { createReduxStore, type AppDispatch } from './config/store'
import {
    type StateSchema,
    type ReduxStoreWithManager,
    type StateSchemaKey,
} from './config/StateSchema'

export {
    StoreProvider,
    createReduxStore,
    type StateSchema,
    type ReduxStoreWithManager,
    type StateSchemaKey,
    type AppDispatch,
}
