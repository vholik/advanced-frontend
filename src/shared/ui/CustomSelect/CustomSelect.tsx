import {
    useMemo,
    useCallback,
    useState,
    useRef,
    useEffect,
} from 'react'


import cls from './CustomSelect.module.scss'

import Check from '@/shared/assets/icons/check.svg'
import ChevronDown from '@/shared/assets/icons/chevron_down.svg'
import { classNames } from '@/shared/lib/classNames/classNames'



export interface SelectOption<T> {
    value: T
    content: string
}

export enum SelectTheme {
    PRIMARY = 'primary_theme',
    SECONDARY = 'secondary_theme',
}

interface CustomSelectProps<T extends string> {
    className?: string
    value?: T
    options?: SelectOption<T>[]
    onChange?: (value: T) => void
    readonly?: boolean
    label?: string
    theme?: SelectTheme
}

const ANIMATION_DELAY = 300

export const CustomSelect = <T extends string>({
    className,
    options,
    onChange,
    value,
    readonly,
    label,
    theme = SelectTheme.SECONDARY,
}: CustomSelectProps<T>) => {
    const [isOpened, setIsOpened] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

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
    }, [closeHandler, isOpened, onKeyDown, value])

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
            onChange?.(value as T)
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
                {opt.value === value && <Check className={cls.check} />}
            </li>
        ))
    }, [onClick, onValueChange, options, value])

    return (
        <div className={cls.select}>
            <button
                className={classNames(cls.selectBtn, {
                    [cls.readonly]: readonly,
                    [cls[theme]]: true,
                })}
                type="button"
                onClick={onClick}
            >
                {label}
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
