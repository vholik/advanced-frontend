import { type Story, type StoryFn } from '@storybook/react'

import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { Theme } from '@/shared/const/theme'
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
