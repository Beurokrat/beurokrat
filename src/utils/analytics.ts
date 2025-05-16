export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
        // @ts-ignore - gtag is not recognized in the window object by TypeScript
        window.gtag('event', eventName, params)
    }
}
