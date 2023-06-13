import { type FC, memo } from 'react'

import cls from './Icon.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'


interface IconProps {
    className?: string
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    color?: IconColor
}

export enum IconColor {
    PRIMARY = 'primary_color',
    SECONDARY = 'secondary_color',
    TERTIARY = 'tertiary_color',
}

export const Icon: FC<IconProps> = memo(
    ({ className, Icon, color = IconColor.PRIMARY }) => {
        return (
            <div
                className={classNames(cls.Icon, { [cls[color]]: true }, [
                    className,
                ])}
            >
                <Icon />
            </div>
        )
    }
)
