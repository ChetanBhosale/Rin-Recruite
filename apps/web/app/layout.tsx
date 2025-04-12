import { Montserrat } from "next/font/google"

import "@workspace/ui/globals.css"
import "@/style/global.css"
import { ThemeProvider } from "@workspace/ui/components/themes/ThemeProvider"

const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontMontserrat.variable} antialiased `}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
