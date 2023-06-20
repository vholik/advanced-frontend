import { type FC } from 'react'

import { useTranslation } from 'react-i18next'

import { Flex, type FlexProps } from '../Flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack: FC<FlexProps> = (props) => {
    const { t } = useTranslation()

    return (
        <Flex
            {...props}
            direction="row"
        />
    )
}
