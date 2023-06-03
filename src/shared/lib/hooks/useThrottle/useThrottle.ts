import { useCallback, useRef } from 'react'

export function useThrottle(cb: (...args: any[]) => void, delay: number) {
    const throttleRef = useRef(false)
    return useCallback(
        (...args) => {
            if (!throttleRef.current) {
                // eslint-disable-next-line n/no-callback-literal
                cb(...args)
                throttleRef.current = true

                setTimeout(() => {
                    throttleRef.current = false
                }, delay)
            }
        },
        [cb, delay]
    )
}
