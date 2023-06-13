import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'


import { Flex, type FlexProps } from '../Flex/Flex'

import cls from './HStack.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack: FC<FlexProps> = (props) => {
    const { t } = useTranslation()

    return <Flex {...props} direction="row" />
}
