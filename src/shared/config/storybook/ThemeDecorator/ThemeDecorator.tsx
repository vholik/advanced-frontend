import { type Story, type StoryFn } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'

export const ThemeDecorator = (theme: Theme) => (Component: Story) => {
    return (
        <div className={`app ${theme}`}>
            <Component />
        </div>
    )
}
