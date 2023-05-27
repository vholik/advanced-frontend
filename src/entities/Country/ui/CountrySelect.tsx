import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { CustomSelect } from 'shared/ui/CustomSelect/CustomSelect'

import { Country } from '../types/country'

const countryArray = [
    { value: Country.Germany, content: 'Germany' },
    { value: Country.Poland, content: 'Poland' },
    { value: Country.USA, content: 'USA' },
    { value: Country.Ukraine, content: 'Ukraine' },
]

interface CountrySelectProps {
    value?: Country
    onChange: (value: Country) => void
    readonly?: boolean
}

export const CountrySelect: FC<CountrySelectProps> = memo(
    ({ onChange, value, readonly }) => {
        return (
            <CustomSelect
                options={countryArray}
                onChange={onChange as (value: string) => void}
                readonly={readonly}
                value={value}
            />
        )
    }
)
