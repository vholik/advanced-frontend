import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import CopyIcon from 'shared/assets/icons/copy.svg'

import { Button, ButtonSize, ThemeButton } from '../Button/Button'
import { Icon } from '../Icon/Icon'

import cls from './Code.module.scss'

interface CodeProps {
    className?: string
    text: string
}

export const Code: FC<CodeProps> = memo(({ className, text }) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text)
    }, [text])

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                className={cls.copyBtn}
                square
                size={ButtonSize.XL}
                theme={ThemeButton.OUTLINE}
                onClick={onCopy}
            >
                <CopyIcon className={cls.icon} />
            </Button>
            <code>{text}</code>
        </pre>
    )
})
