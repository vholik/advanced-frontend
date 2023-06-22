export { userReducer, userActions } from './model/slice/userSlice'
export type { User, UserSchema } from './model/type/user'
export { UserRole } from './model/consts/userConsts'
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
export { getUserInited } from './model/selectors/getUserInited/getUserInited'
export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelector'
export {
    useJsonSettingsByKey,
    useJsonSettings,
} from './model/selectors/jsonSettings'
export { saveJsonSettings } from './model/services/saveJsonSettings'
export { initAuthData } from './model/services/initAuthData'
