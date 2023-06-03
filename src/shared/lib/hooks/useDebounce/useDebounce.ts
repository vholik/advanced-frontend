import { type MutableRefObject, useRef, useCallback } from 'react'

export function useDebounce(cb: (...args: any[]) => any, delay: number) {
    const timer = useRef() as MutableRefObject<any>

    return useCallback(
        (...args: any[]) => {
            if (timer) {
                clearTimeout(timer.current)
            }
            timer.current = setTimeout(() => {
                // eslint-disable-next-line n/no-callback-literal
                cb(...args)
            }, delay)
        },
        [cb, delay]
    )
}
