import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import { Flex, type FlexProps } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack: FC<VStackProps> = (props) => {
    const { align = 'start' } = props

    return <Flex {...props} direction="column" align={align} />
}
