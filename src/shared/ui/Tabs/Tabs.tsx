import { type FC, memo, useState, useRef, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './Tabs.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'


interface TabsProps<T> {
    className?: string
    items: TabItem<T>[]
    value?: T
    onChange?: (value: T) => void
}

export interface TabItem<T> {
    content: string
    value: T
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const { className, items, value, onChange } = props

    const onClickHandler = useCallback(
        (newValue: T) =>
            (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                onChange?.(newValue)
            },
        [onChange]
    )

    const renderElement = useCallback(
        (it: TabItem<T>) => {
            return (
                <li
                    key={it.value}
                    className={classNames(
                        cls.tabItem,
                        { [cls.active]: value === it.value },
                        []
                    )}
                    onClick={onClickHandler(it.value)}
                >
                    {it.content}
                </li>
            )
        },
        [onClickHandler, value]
    )

    return (
        <ul className={classNames(cls.Tabs, {}, [className])}>
            {items.map(renderElement)}
        </ul>
    )
}
