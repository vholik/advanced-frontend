/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import {
    useMemo,
    type FC,
    useCallback,
    type ChangeEvent,
    useState,
    useRef,
    useEffect,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import ChevronDown from 'shared/assets/icons/chevron_down.svg'
import Check from 'shared/assets/icons/check.svg'

import { Portal } from '../Portal/Portal'

import cls from './CustomSelect.module.scss'

export interface SelectOption {
    value: string
    content: string
}

interface CustomSelectProps {
    className?: string
    value?: string
    options?: SelectOption[]
    onChange?: (value: string) => void
    readonly?: boolean
}

const ANIMATION_DELAY = 300

export const CustomSelect: FC<CustomSelectProps> = ({
    className,
    options,
    onChange,
    value,
    readonly,
}) => {
    const [isOpened, setIsOpened] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const [currentValue, setCurrentValue] = useState(value)

    const onClose = useCallback(() => {
        setIsOpened(false)
    }, [])

    const openHandler = useCallback((event: React.MouseEvent) => {
        setIsOpened(true)
        onContentClick(event)
    }, [])

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeHandler()
            }
        },
        [closeHandler]
    )

    useEffect(() => {
        if (isOpened) {
            window.addEventListener('keydown', onKeyDown)
            window.addEventListener('click', closeHandler)
        }

        return () => {
            clearTimeout(timerRef.current!)
            window.removeEventListener('keydown', onKeyDown)
            window.removeEventListener('click', closeHandler)
        }
    }, [closeHandler, isOpened, onKeyDown])

    const onContentClick = (event: React.MouseEvent) => {
        event.stopPropagation()
    }

    const onClick = useCallback(
        (event: React.MouseEvent) => {
            if (isOpened) {
                closeHandler()
            } else {
                onContentClick(event)
                openHandler(event)
            }
        },
        [closeHandler, isOpened, openHandler]
    )

    const onValueChange = useCallback(
        (value: string) => {
            onChange?.(value)
            setCurrentValue(value)
        },
        [onChange]
    )

    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <li
                className={cls.dropdownItem}
                onClick={(event) => {
                    onClick(event)
                    onValueChange(opt.value)
                }}
                key={opt.value}
            >
                {opt.content}
                {opt.value === currentValue && <Check className={cls.check} />}
            </li>
        ))
    }, [currentValue, onClick, onValueChange, options])

    return (
        <div className={cls.select}>
            <button
                className={classNames(cls.selectBtn, {
                    [cls.readonly]: readonly,
                })}
                type="button"
                onClick={onClick}
            >
                {currentValue || '-'}
                <ChevronDown className={cls.chevron} />
            </button>
            <ul
                className={classNames(cls.dropdownList, {
                    [cls.opened]: isOpened,
                    [cls.closing]: isClosing,
                })}
                onClick={onContentClick}
            >
                {optionsList}
            </ul>
        </div>
    )
}
