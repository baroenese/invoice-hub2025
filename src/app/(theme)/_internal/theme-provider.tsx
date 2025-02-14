'use client';

import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Header } from '#/main/components/header';
import { SideMenu } from '#/main/components/side-menu';
import { AppNavbar } from '#/main/components/app-navbar';
import { AppTheme } from '#/main/theme/app';
import CssBaseline from '@mui/material/CssBaseline';
import { dataGridCustomizations } from '#/main/theme/customizations/data-grid';

export function ThemeProvider({
    children,
    fontFamily,
}: Readonly<{
    children: React.ReactNode;
    fontFamily: string;
}>) {
    return (
        <AppTheme
            fontFamily={fontFamily}
            themeComponents={{
                ...dataGridCustomizations,
            }}
        >
            <>
                <CssBaseline />
                <Box sx={{ display: 'flex' }}>
                    <SideMenu />
                    <AppNavbar />
                    {/* Main content */}
                    <Box
                        component="main"
                        sx={(theme) => ({
                            flexGrow: 1,
                            backgroundColor: theme.vars
                                ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                                : alpha(theme.palette.background.default, 1),
                            overflow: 'auto',
                        })}
                    >
                        <Stack
                            spacing={2}
                            sx={{
                                alignItems: 'center',
                                mx: 3,
                                pb: 5,
                                mt: { xs: 8, md: 0 },
                            }}
                        >
                            <Header />
                            {children}
                        </Stack>
                    </Box>
                </Box>
            </>
        </AppTheme>
    )
}