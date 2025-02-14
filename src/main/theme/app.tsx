'use client';

import { Fragment, useEffect, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { colorSchemes, shadows, shape } from './primitive';

interface AppThemeProps {
    children: React.ReactNode;
    disableCustomTheme?: boolean;
    themeComponents?: ThemeOptions['components'];
    fontFamily: string;
}

export function AppTheme(props: AppThemeProps) {
    const { children, disableCustomTheme, themeComponents } = props;
    const [isMount, setIsMount] =  useState(false)
    const theme = useMemo(() => {
        return disableCustomTheme
            ? {}
            : createTheme({
                colorSchemes,
                shadows,
                shape,
                cssVariables: {
                    colorSchemeSelector: 'data-mui-color-scheme',
                    cssVarPrefix: 'template',
                },
                typography: {
                    fontFamily: props.fontFamily,
                },
                components: {
                    MuiAlert: {
                        styleOverrides: {
                            root: {
                                variants: [
                                    {
                                        props: { severity: 'info' },
                                        style: {
                                            backgroundColor: '#60a5fa',
                                        },
                                    }
                                ],
                            },
                        },
                    },
                    ...themeComponents,
                },
            });
    }, [disableCustomTheme, themeComponents]);

    useEffect(() => {
        setIsMount(true)
    }, [])

    if (!isMount) return <p>Please loading...</p>
    if (disableCustomTheme) {
        return <Fragment>{children}</Fragment>;
    }
    return (
        <ThemeProvider theme={theme} disableTransitionOnChange>
            {children}
        </ThemeProvider>
    );
}
