import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import {
    type Article,
    ArticleType,
    ArticleBlockType,
} from 'entities/Article/model/types/article'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { avatarLink } from 'shared/const/tests'

import { ArticleDetails } from './ArticleDetails'

const data: Article = {
    id: '1',
    title: '5 ways to review code without wasting everyone’s time',
    subtitle: 'The what and how to review pull requests',
    img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*z-MpdUQwngYuV2ebCfLTng.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'user',
        avatar: avatarLink,
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            paragraphs: [
                'As an iOS developer, I have reviewed thousands of lines of code from my peers. Like programming, reviewing code makes you feel either smart or utterly stupid.',
                'In this article, we focus on what and how we should review. It’s part two of an article series explaining why, what and how to review code.',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
    ],
}

const meta = {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleDetails>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        id: '1',
    },
    decorators: [StoreDecorator({ articleDetails: { data } })],
}

export const IsLoading: Story = {
    args: {
        id: '1',
    },
    decorators: [StoreDecorator({ articleDetails: { isLoading: true } })],
}

export const Error: Story = {
    args: {
        id: '1',
    },
    decorators: [StoreDecorator({ articleDetails: { error: 'Error' } })],
}
