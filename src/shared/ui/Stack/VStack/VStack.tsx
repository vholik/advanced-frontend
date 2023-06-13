import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Flex, type FlexProps } from '../Flex/Flex'

import { classNames } from '@/shared/lib/classNames/classNames'


type VStackProps = Omit<FlexProps, 'direction'>

export const VStack: FC<VStackProps> = (props) => {
    const { align = 'start' } = props

    return <Flex {...props} direction="column" align={align} />
}
