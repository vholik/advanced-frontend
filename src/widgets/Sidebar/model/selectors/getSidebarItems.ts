import { createSelector } from '@reduxjs/toolkit'

import { type SidebarItemType } from '../types/sidebar'

import { getUserAuthData } from '@/entities/User'
import MainIcon from '@/shared/assets/icons/home.svg'
import InfoIcon from '@/shared/assets/icons/info.svg'
import ArticleIcon from '@/shared/assets/icons/layers.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIcon,
            text: 'Main',
            authOnly: false,
        },
        {
            path: getRouteAbout(),
            Icon: InfoIcon,
            text: 'About',
            authOnly: false,
        },
    ]

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: ProfileIcon,
                text: 'Profile',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: ArticleIcon,
                text: 'Articles',
                authOnly: true,
            },
        )
    }

    return sidebarItemsList
})
