import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'

import { Flex, type FlexProps } from '../Flex/Flex'

import cls from './HStack.module.scss'

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack: FC<FlexProps> = (props) => {
    const { t } = useTranslation()

    return <Flex {...props} direction="row" />
}
