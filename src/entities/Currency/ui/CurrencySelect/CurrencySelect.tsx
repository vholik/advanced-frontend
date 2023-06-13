import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { CustomSelect } from 'shared/ui/CustomSelect/CustomSelect'
import { ListBox, type ListBoxItem } from 'shared/ui/Popups'

import { Currency } from '../../model/types/currency'

import cls from './CurrencySelect.module.scss'

const currencyArray = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
]

interface CurrencySelectProps {
    value?: Currency
    onChange: (value: Currency) => void
    readonly?: boolean
}

export const CurrencySelect: FC<CurrencySelectProps> = memo(
    ({ onChange, value, readonly }) => {
        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency)
            },
            [onChange]
        )

        return (
            <ListBox
                items={currencyArray as ListBoxItem[]}
                onChange={onChangeHandler}
                readonly={readonly}
                value={value}
                direction="top left"
            />
        )
    }
)
