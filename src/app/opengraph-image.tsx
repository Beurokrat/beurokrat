import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 60,
                    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'system-ui, sans-serif', // Use system fonts
                    color: 'white',
                }}
            >
                Beurokrat
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    )
}