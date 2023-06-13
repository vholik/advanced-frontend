import { type Story, type StoryFn } from '@storybook/react'
import { ThemeProvider, type Theme } from '@/app/providers/ThemeProvider'
import '@/app/styles/index.scss'

export const ThemeDecorator = (theme: Theme) => (Component: Story) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <Component />
            </div>
        </ThemeProvider>
    )
}
