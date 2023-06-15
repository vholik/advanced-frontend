import { FC, memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserView, MobileView } from 'react-device-detect'

import { classNames } from '@/shared/lib/classNames/classNames'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text, TextSize } from '@/shared/ui/Text/Text'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { Modal } from '@/shared/ui/Modal/Modal'
import { Input, InputTheme } from '@/shared/ui/Input/Input'
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/Button/Button'
import { Drawer } from '@/shared/ui/Drawer/Drawer'

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeeback?: boolean
    onCancel?: (starCount: number) => void
    onAccept?: (starCount: number, feedback?: string) => void
    rate?: number
}

export const RatingCard: FC<RatingCardProps> = memo((props) => {
    const {
        className,
        feedbackTitle,
        hasFeeback,
        onAccept,
        onCancel,
        title,
        rate,
    } = props
    const { t } = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(rate ?? 0)
    const [feedback, setFeedback] = useState('')

    const onSelectStars = useCallback(
        (selectedStarCount: number) => {
            setStarsCount(selectedStarCount)
            if (hasFeeback) {
                setIsModalOpen(true)
            } else {
                onAccept?.(selectedStarCount)
            }
        },
        [hasFeeback, onAccept]
    )

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount, feedback)
    }, [feedback, onAccept, starsCount])

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount)
    }, [onAccept, starsCount])

    const modalContent = (
        <VStack max gap="8" align="start">
            <VStack>
                <Text title={feedbackTitle} />
                <Text text={t('We would to love to hear your feedback')} />
            </VStack>

            <Input placeholder={t('Your feedback')} onChange={setFeedback} />
            <HStack max gap="4">
                <Button size={ButtonSize.SM} onClick={acceptHandler}>
                    {t('Send')}
                </Button>
                <Button
                    theme={ThemeButton.OUTLINE}
                    size={ButtonSize.SM}
                    onClick={cancelHandler}
                >
                    {t('Close')}
                </Button>
            </HStack>
        </VStack>
    )

    return (
        <div className={classNames('', {}, [className])}>
            <VStack align="center" gap="4">
                <Text title={title} size={TextSize.S} />
                <StarRating
                    size={40}
                    onSelect={onSelectStars}
                    selectedStars={starsCount}
                />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    {modalContent}
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer>{modalContent}</Drawer>
            </MobileView>
        </div>
    )
})
