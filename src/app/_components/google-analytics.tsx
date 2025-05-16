'use client'

import { GoogleAnalytics } from '@next/third-parties/google'

export default function Analytics({ measurementId }: { measurementId: string }) {
    return <GoogleAnalytics gaId={measurementId} />
}
