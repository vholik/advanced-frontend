import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { CustomSelect } from 'shared/ui/CustomSelect/CustomSelect'
import { ListBox } from 'shared/ui/ListBox/ListBox'

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
        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country)
            },
            [onChange]
        )
        return (
            <ListBox
                items={countryArray}
                onChange={onChangeHandler}
                readonly={readonly}
                value={value}
                direction="bottom left"
            />
        )
    }
)
