/* eslint-disable i18next/no-literal-string */
import { type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'

import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

interface CounterProps {
    className?: string
}

export const Counter: FC<CounterProps> = ({ className }) => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)

    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div className={classNames('', {}, [className])}>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={increment} data-testid="increment-btn">
                Increment
            </Button>
            <Button onClick={decrement} data-testid="decrement-btn">
                Decrement
            </Button>
        </div>
    )
}
