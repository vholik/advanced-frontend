import { type FC, memo } from 'react'

import cls from './Icon.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    color?: IconColor
}

export enum IconColor {
    PRIMARY = 'primary_color',
    SECONDARY = 'secondary_color',
    TERTIARY = 'tertiary_color',
    UNSET = 'unset_color',
}

export const Icon: FC<IconProps> = memo(
    ({ className, Svg, color = IconColor.PRIMARY, ...otherProps }) => {
        return (
            <div
                className={classNames(cls.Icon, { [cls[color]]: true }, [
                    className,
                ])}
            >
                <Svg {...otherProps} />
            </div>
        )
    }
)
