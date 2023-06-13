import { fireEvent, screen } from '@testing-library/react'

import { Counter } from './Counter'

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'


describe('Counter', () => {
    test('should display counter value', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        })
        const value = screen.getByTestId('value-title')
        expect(value).toHaveTextContent('10')
    })
    test('should increment value on button', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        })
        const incrementBtn = screen.getByTestId('increment-btn')
        fireEvent.click(incrementBtn)
        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })
    test('should decrement value on button', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        })
        const decrementBtn = screen.getByTestId('decrement-btn')
        fireEvent.click(decrementBtn)
        expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    })
})
