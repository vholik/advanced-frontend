import type { Preview } from '@storybook/react'

import { Theme } from '../../src/shared/const/theme'
import '../../src/app/styles/index.scss'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        SuspenseDecorator,
    ],
}

export default preview
