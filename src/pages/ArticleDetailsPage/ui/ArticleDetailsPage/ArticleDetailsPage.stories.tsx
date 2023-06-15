import type { Meta, StoryObj } from '@storybook/react'

import ArticleDetailsPage from './ArticleDetailsPage'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { type Article } from '@/entities/Article'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { avatarLink } from '@/shared/const/tests'
import { ArticleType, ArticleBlockType } from '@/entities/Article'

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
        username: 'username',
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
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleDetailsPage>

export default meta
type Story = StoryObj<typeof meta>

// export const Primary: Story = {
//     args: {},
//     decorators: [StoreDecorator({ articleDetails: { data } })],
// }
