import { type FC, memo, Fragment, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Menu } from '@headlessui/react'
import { type DropdownDirection } from 'shared/types/ui'

import popupCls from '../../styles/popup.module.scss'
import { AppLink } from '../../../AppLink/AppLink'
import { mapDirectionClass } from '../../styles/consts'

import cls from './Dropdown.module.scss'

export interface DropdownItem {
    disabled?: boolean
    content?: ReactNode
    onClick?: () => void
    href?: string
}

interface DropdownProps {
    className?: string
    items: DropdownItem[]
    trigger: ReactNode
    direction?: DropdownDirection
}

export const Dropdown: FC<DropdownProps> = memo((props) => {
    const { className, trigger, items, direction = 'top right' } = props
    const { t } = useTranslation()

    const menuClasses = [mapDirectionClass[direction]]

    return (
        <Menu as="div" className={classNames(popupCls.popup, {}, [])}>
            <Menu.Button className={popupCls.btn}>{trigger}</Menu.Button>
            <Menu.Items
                className={classNames(cls.menu, {}, menuClasses)}
                as="ul"
            >
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            className={classNames(
                                cls.item,
                                { [popupCls.active]: active },
                                []
                            )}
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    )

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                key={item.href}
                                to={item.href}
                            >
                                {content}
                            </Menu.Item>
                        )
                    }

                    return (
                        <Menu.Item as={Fragment} key={item.href}>
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
})
