import { rtkApi } from '@/shared/api/rtkApi'
import { User } from '../model/type/user'
import { JsonSettings } from '../model/type/jsonSettings'

interface SetJsonSettingsArg {
    userId: string
    jsonSettings: JsonSettings
}

export const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        setJsonSettings: build.mutation<User, SetJsonSettingsArg>({
            query: ({ jsonSettings, userId }) => ({
                url: '/users' + userId,
                method: 'PATCH',
                body: {
                    jsonSettings,
                },
            }),
        }),
    }),
})

export const setJsonSettingsMutation =
    userApi.endpoints.setJsonSettings.initiate
