import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './articleDetails'
import { ArticleBlockType, ArticleType } from '../conts/articleConsts'


import { type StateSchema } from '@/app/providers/StoreProvider'



const data = {
    id: '1',
    title: '5 ways to review code without wasting everyone’s time',
    subtitle: 'The what and how to review pull requests',
    img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*z-MpdUQwngYuV2ebCfLTng.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
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

describe('articleDetails test', () => {
    test('test selector', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: { data },
        }
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
    })
    test('test selector error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: { error: '12123' },
        }
        expect(getArticleDetailsError(state as StateSchema)).toEqual('12123')
    })

    test('test selector loading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: { isLoading: true },
        }
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
    })
})
