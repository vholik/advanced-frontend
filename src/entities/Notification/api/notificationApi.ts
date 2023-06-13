import { type Notification } from '../model/types/notification'

import { rtkApi } from '@/shared/api/rtkApi'


export const notificationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
})

export const useNotifications = notificationsApi.useGetNotificationsQuery
