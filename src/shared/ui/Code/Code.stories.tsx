import { Code } from './Code'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/Code',
    component: Code,
    tags: ['autodocs'],
} satisfies Meta<typeof Code>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        text: `public Optional<T> findById(ID id) {
 
    Assert.notNull(id, ID_MUST_NOT_BE_NULL);
 
    Class<T> domainType = getDomainClass();
 
    if (metadata == null) {
        return Optional.ofNullable(em.find(domainType, id));
    }
 
    LockModeType type = metadata.getLockModeType();
 
    Map<String, Object> hints = new HashMap<>();
 
    getQueryHints().withFetchGraphs(em).forEach(hints::put);
 
    if (metadata.getComment() != null && provider.getCommentHintKey() != null) {
        hints.put(provider.getCommentHintKey(), provider.getCommentHintValue(metadata.getComment()));
    }
 
    return Optional.ofNullable(type == null ? em.find(domainType, id, hints) : em.find(domainType, id, type, hints));
}`,
    },
}
