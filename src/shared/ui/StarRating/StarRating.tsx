import { FC, memo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Icon, IconColor } from '../Icon/Icon'

import cls from './StarRating.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'
import StarIcon from '@/shared/assets/icons/star.svg'

interface StarRatingProps {
    className?: string
    onSelect?: (starCount: number) => void
    size?: number
    selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating: FC<StarRatingProps> = memo((props) => {
    const { className, onSelect, selectedStars = 0, size } = props
    const { t } = useTranslation()
    const [isHovered, setIsHovered] = useState(false)
    const [currentStarCount, setCurrentStarCount] = useState(selectedStars)
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

    const onHover = (starCount: number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starCount)
        }
    }

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarCount(0)
        }
    }

    const onClick = (starNumber: number) => () => {
        if (!isSelected) {
            onSelect?.(starNumber)
            setCurrentStarCount(starNumber)
            setIsSelected(true)
        }
    }

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <StarIcon
                    onMouseEnter={onHover(starNumber)}
                    onMouseLeave={onLeave}
                    key={starNumber}
                    color={IconColor.UNSET}
                    className={classNames(cls.starIcon, {
                        [cls.hovered]: currentStarCount >= starNumber,
                        [cls.normal]: currentStarCount < starNumber,
                        [cls.selected]: isSelected,
                    })}
                    width={size}
                    height={size}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    )
})
