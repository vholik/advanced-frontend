## Storybook

The project uses Storybook for component development and documentation.
For the each component there is a .storybook.tsx
For data mocking there is a storybook-addon-mock.

-   `npm run storybook` - Run Storybook
-   `npm run storybook:build` - Build Storybook

Example:

```typescript jsx
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Button, ButtonSize, ButtonTheme } from './Button'
import { Theme } from '@/shared/const/theme'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text',
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
}
```
