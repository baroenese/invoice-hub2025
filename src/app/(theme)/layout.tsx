import { Roboto } from 'next/font/google';
import { ThemeProvider } from './_internal/theme-provider';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function Layout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider
            fontFamily={roboto.style.fontFamily}
        >
            {children}
        </ThemeProvider>
    )
}