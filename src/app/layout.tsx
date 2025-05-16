import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

//components
import Navbar from './_components/navbar'
import Footer from './_components/footer'
import Analytics from './_components/google-analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Beurokrat',
    description: 'Reprogramming the future',
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [{ url: '/apple-touch-icon.png' }],
        other: [
            {
                rel: 'android-chrome-192x192',
                url: '/android-chrome-192x192.png',
            },
            {
                rel: 'android-chrome-512x512',
                url: '/android-chrome-512x512.png',
            },
        ],
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
                <Analytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
            </body>
        </html>
    )
}
