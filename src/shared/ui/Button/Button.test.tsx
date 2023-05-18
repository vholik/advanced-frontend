import { render, screen } from '@testing-library/react'
import React from 'react'

import { Button, ThemeButton } from './Button'

describe('Button', () => {
    test('button is in the document', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('button has class theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
        screen.debug()
    })
})
