'use client'

import { useEffect, useState } from 'react'

export type Appearance = 'light' | 'dark' | 'system'

function getSystemTheme(): 'light' | 'dark' {
    if (typeof window === 'undefined') return 'light'

    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
}

function applyTheme(mode: Appearance) {
    const resolved = mode === 'system' ? getSystemTheme() : mode

    document.documentElement.classList.toggle('dark', resolved === 'dark')
}

export function useAppearance() {
    const [appearance, setAppearance] = useState<Appearance>('system')
    const [resolved, setResolved] = useState<'light' | 'dark'>('light')


    useEffect(() => {
        const stored = (localStorage.getItem('appearance') as Appearance) || 'system'
        setAppearance(stored)

        const current = stored === 'system' ? getSystemTheme() : stored
        setResolved(current)

        applyTheme(stored)
    }, [])


    useEffect(() => {
        const current = appearance === 'system' ? getSystemTheme() : appearance

        setResolved(current)
        applyTheme(appearance)

        localStorage.setItem('appearance', appearance)
    }, [appearance])


    useEffect(() => {
        if (appearance !== 'system') return

        const media = window.matchMedia('(prefers-color-scheme: dark)')
        const listener = () => {
            const current = getSystemTheme()
            setResolved(current)
            applyTheme('system')
        }

        media.addEventListener('change', listener)
        return () => media.removeEventListener('change', listener)
    }, [appearance])


    return {
        appearance,
        setAppearance,
        resolved,
    }
}