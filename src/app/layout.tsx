import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Barthélemy Paléologue - Resume',
  description: 'My resume.',
  applicationName: 'Barthélemy Paléologue - Resume',
  robots: 'index,follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
