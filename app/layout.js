import './globals.css'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'Valent Systems',
  description: 'Agentic procurement for specialty ingredients. Infrastructure for beauty contract manufacturing.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
