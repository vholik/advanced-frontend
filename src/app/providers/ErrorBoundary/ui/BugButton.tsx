import { type FC, useState, useEffect } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button/Button'

interface BugButtonProps {
    className?: string
}

// Testing button only
export const BugButton: FC<BugButtonProps> = ({ className }) => {
    const [error, setError] = useState(false)

    const throwError = () => {
        setError(true)
    }

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={throwError}
            // eslint-disable-next-line i18next/no-literal-string
        >
            Throw error
        </Button>
    )
}
