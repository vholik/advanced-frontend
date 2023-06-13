import path from 'path'

import {
    type FC,
    memo,
    useRef,
    type MutableRefObject,
    type UIEvent,
    type ReactNode,
} from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import cls from './Page.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getScrollByPath, restoreScrollActions } from '@/features/RestoreScroll'
import { type RootState } from '@/app/providers/StoreProvider/config/store'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle'


interface PageProps {
    className?: string
    onScrollEnd?: () => void
    storeScroll?: boolean
    children?: ReactNode
}

export const Page: FC<PageProps> = (props) => {
    const { className, children, onScrollEnd, storeScroll } = props
    const dispatch = useAppDispatch()
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const { pathname } = useLocation()
    const scrollPosition = useSelector((state: RootState) =>
        getScrollByPath(state, pathname)
    )

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const onScroll = useThrottle((event: UIEvent) => {
        if (storeScroll) {
            dispatch(
                restoreScrollActions.setScrollPosition({
                    position: event.currentTarget.scrollTop,
                    path: pathname,
                })
            )
        }
    }, 500)

    return (
        <main
            className={classNames(cls.Page, {}, [className])}
            ref={wrapperRef}
            onScroll={onScroll}
        >
            {children}
            {onScrollEnd ? (
                <div className={cls.trigger} ref={triggerRef}></div>
            ) : null}
        </main>
    )
}
