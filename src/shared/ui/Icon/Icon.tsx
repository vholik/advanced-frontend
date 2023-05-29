import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Icon.module.scss'

interface IconProps {
    className?: string
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export const Icon: FC<IconProps> = memo(({ className, Icon }) => {
    return (
        <div className={classNames(cls.Icon, {}, [className])}>
            <Icon />
        </div>
    )
})
