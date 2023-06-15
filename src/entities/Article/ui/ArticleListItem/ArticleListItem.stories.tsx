import { ArticleListItem } from './ArticleListItem'
import { ArticleView } from '../../model/conts/articleConsts'
import { type Article } from '../../model/types/article'

import type { Meta, StoryObj } from '@storybook/react'



import { avatarLink } from '@/shared/const/tests'

const meta = {
    title: 'shared/ArticleListItem',
    component: ArticleListItem,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleListItem>

export default meta
type Story = StoryObj<typeof meta>

const article = {
    id: '1',
    title: 'Top 9 software architecture tools',
    subtitle:
        'The best free and paid tools to visualize your software architecture',
    img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*_mmk9fnuq6MgDmswXoofEg.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: ['IT'],
    user: {
        id: '1',
        username: 'username',
        avatar: avatarLink,
    },
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: '⚡ Tl;dr',
            paragraphs: [
                'As an iOS developer, I have reviewed thousands of lines of code from my peers. Like programming, reviewing code makes you feel either smart or utterly stupid.Software architecture tools can be categorized into three groups, modelling tools, diagrams as code and diagramming tools.',
                'In this article, we focus on what and how we should review. It’s part two of an article series explaining why, what and how to review code.Modelling and diagrams as code tools are better suited for long-term documentation, while diagramming tools are better for quick one-off sketches.',
                'Modelling and diagrams as code have more structure and require more setup, while diagramming tools are more generic but require less thinking.',
            ],
        },
        {
            id: '2',
            type: 'TEXT',
            title: '🚀 Let’s kick-off',
            paragraphs: [
                'Diagramming software architecture provides several benefits to how we communicate complexity. Well-thought-out diagrams give engineering teams an enhanced understanding of the design and plan for future development whilst identifying potential issues.',
                'Modelling and diagrams as code tools are better suited for long-term documentation, while diagramming tools are better for quick one-off sketches.',
            ],
        },
        {
            id: '3',
            type: 'TEXT',
            title: '📦 Visual modelling tools',
            paragraphs: [
                'Modelling is best for long-term system design docs and requires some setup work. Reusable objects and relationships are stored in the model, which keeps all your diagrams up to date.',
            ],
        },
    ],
} as Article

export const Primary: Story = {
    args: {
        article,
        view: ArticleView.GRID,
    },
}

export const List: Story = {
    args: {
        article,
        view: ArticleView.LIST,
    },
}
