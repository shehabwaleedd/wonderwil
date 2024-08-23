import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Wonderwil',
        short_name: 'wonderwil',
        description: 'Wonderwil: A premier creative studio specializing in brand strategy, high-quality content, and production for top-tier global projects. Committed to advancing community-powered public spaces for social good.',
        lang: 'en',
        start_url: '/',
        display: 'standalone',
        background_color: '#fafafa',
        theme_color: '#fafafa',
        scope: '.',
        icons: [
            {
                src: '/favicon.ico',
                sizes: '16x16 32x32', 
                type: 'image/x-icon',
            },
            {
                src: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any'
            },
            {
                src: '/android-chrome-512x512.png', 
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any'  
            },
            {
                src: '/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
            {
                src: '/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                src: '/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                src: '/android-chrome-192x192.png',
                sizes: '196x196',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/android-chrome-512x512.png', 
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],


    }
}