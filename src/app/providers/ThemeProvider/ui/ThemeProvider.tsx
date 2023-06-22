import { type FC, useMemo, useState, type ReactNode, useEffect } from 'react'

import { ThemeContext } from '../../../../shared/lib/context/ThemeContext'

import { Theme } from '@/shared/const/theme'
import { useJsonSettings } from '@/entities/User/model/selectors/jsonSettings'

interface ThemeProviderProps {
    initialTheme?: Theme
    children?: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme } = props
    const { theme: defaultTheme } = useJsonSettings()
    const [isThemeInited, setThemeInited] = useState(false)

    const [theme, setTheme] = useState<Theme>(
        initialTheme || defaultTheme || Theme.LIGHT,
    )

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme])

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme)
            setThemeInited(true)
        }
    }, [defaultTheme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
