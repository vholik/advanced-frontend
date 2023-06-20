/* eslint-disable i18next/no-literal-string */
import { type FC } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions, useCounterActions } from '../model/slice/counterSlice'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button'

interface CounterProps {
    className?: string
}

export const Counter: FC<CounterProps> = ({ className }) => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const actions = useCounterActions()

    const increment = () => {
        actions.increment()
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div className={classNames('', {}, [className])}>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={increment}
                data-testid="increment-btn">
                Increment
            </Button>
            <Button
                onClick={decrement}
                data-testid="decrement-btn">
                Decrement
            </Button>
        </div>
    )
}
