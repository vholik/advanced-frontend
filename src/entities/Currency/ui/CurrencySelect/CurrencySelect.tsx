import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { CustomSelect } from 'shared/ui/CustomSelect/CustomSelect'

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
        return (
            <CustomSelect
                options={currencyArray}
                onChange={onChange as (value: string) => void}
                readonly={readonly}
                value={value}
            />
        )
    }
)
