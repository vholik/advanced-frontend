import { type FC, memo, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Popover as HPopover } from '@headlessui/react'


import { mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'

import cls from './Popover.module.scss'

import { type DropdownDirection } from '@/shared/types/ui'
import { classNames } from '@/shared/lib/classNames/classNames'

interface PopoverProps {
    className?: string
    trigger?: ReactNode
    direction?: DropdownDirection
    children?: ReactNode
}

export const Popover: FC<PopoverProps> = memo((props) => {
    const { className, direction = 'bottom right', trigger, children } = props

    const menuClasses = [mapDirectionClass[direction]]

    return (
        <HPopover className={classNames(popupCls.popup, {}, [className])}>
            <HPopover.Button className={popupCls.btn}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    )
})
