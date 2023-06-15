import { createSelector } from '@reduxjs/toolkit'

import { type SidebarItemType } from '../types/sidebar'

import { getUserAuthData } from '@/entities/User'
import MainIcon from '@/shared/assets/icons/home.svg'
import InfoIcon from '@/shared/assets/icons/info.svg'
import ArticleIcon from '@/shared/assets/icons/layers.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import { RoutePath } from '@/shared/const/router'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: RoutePath.main,
            Icon: MainIcon,
            text: 'Main',
            authOnly: false,
        },
        {
            path: RoutePath.about,
            Icon: InfoIcon,
            text: 'About',
            authOnly: false,
        },
    ]

    if (userData) {
        sidebarItemsList.push(
            {
                path: RoutePath.profile + userData?.id,
                Icon: ProfileIcon,
                text: 'Profile',
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                Icon: ArticleIcon,
                text: 'Articles',
                authOnly: true,
            }
        )
    }

    return sidebarItemsList
})
