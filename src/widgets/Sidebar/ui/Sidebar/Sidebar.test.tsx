import { fireEvent, screen } from '@testing-library/react'

import { Sidebar } from './Sidebar'

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

describe('Sidebar', () => {
    test('sidebar is in the document', () => {
        componentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('test toggle', () => {
        componentRender(<Sidebar />)
        const button = screen.getByTestId('toggle-button')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(button)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
