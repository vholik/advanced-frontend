import { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeContext'

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage'
import { Theme } from '@/shared/const/theme'

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    document.body.className = theme || Theme.LIGHT

    return { theme: theme || Theme.LIGHT, toggleTheme }
}
