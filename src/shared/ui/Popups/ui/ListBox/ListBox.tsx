import { Fragment, useMemo } from 'react'

import { Listbox } from '@headlessui/react'
import { useTranslation } from 'react-i18next'

import cls from './ListBox.module.scss'
import { Icon, IconColor } from '../../../Icon/Icon'
import { mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'

import CheckIcon from '@/shared/assets/icons/check.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type DropdownDirection } from '@/shared/types/ui'

type ListBoxTheme = 'primary_theme' | 'secondary_theme'

export interface ListBoxItem<T> {
    value: T
    content: string
}

interface ListBoxProps<T> {
    className?: string
    theme?: ListBoxTheme
    items?: ListBoxItem<T>[]
    value?: T
    defaultValue?: T
    onChange: (value: T) => void
    readonly?: boolean
    direction?: DropdownDirection
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const {
        className,
        theme = 'primary_theme',
        onChange,
        defaultValue,
        items,
        value,
        readonly,
        direction = 'bottom right',
    } = props

    const { t } = useTranslation()
    const optionsMods = [cls.options, mapDirectionClass[direction]]

    const content = useMemo(() => {
        return items?.find((it) => it.value === value)?.content
    }, [value, items])

    return (
        <Listbox
            as="div"
            value={value}
            onChange={onChange}
            className={popupCls.popup}
        >
            {({ open }) => (
                <>
                    <Listbox.Button
                        className={classNames(
                            cls.trigger,
                            {
                                [cls.open]: open,
                                [cls[theme]]: true,
                                [popupCls.readonly]: readonly,
                            },
                            [popupCls.popup]
                        )}
                    >
                        {content}
                    </Listbox.Button>
                    <Listbox.Options
                        className={classNames(cls.menu, {}, optionsMods)}
                    >
                        {items
                            ? items.map((item) => (
                                  <Listbox.Option
                                      key={item.value}
                                      value={item.value}
                                      as={Fragment}
                                  >
                                      {({ active, selected }) => (
                                          <li
                                              className={classNames(cls.item, {
                                                  [popupCls.active]: active,
                                              })}
                                          >
                                              {item.content}{' '}
                                              {selected && (
                                                  <Icon
                                                      Svg={CheckIcon}
                                                      color={IconColor.PRIMARY}
                                                  />
                                              )}
                                          </li>
                                      )}
                                  </Listbox.Option>
                              ))
                            : null}
                    </Listbox.Options>
                </>
            )}
        </Listbox>
    )
}
