import './globals.css'

export const metadata = {
  title: 'Stave - The Hadrian of Chemicals',
  description: 'Procurement and liquidity engine for mid-market contract manufacturers. Margin expansion through forward-looking volume.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
