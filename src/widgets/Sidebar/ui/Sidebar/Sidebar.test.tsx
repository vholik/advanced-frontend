import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
    test('sidebar is in the document', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('test toggle', () => {
        renderWithTranslation(<Sidebar />)
        const button = screen.getByText('toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(button)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
