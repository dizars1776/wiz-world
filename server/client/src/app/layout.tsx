import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const verdana = localFont({ src: "../../public/fonts/Verdana.woff2", display: "swap", variable: "--font-verdana", })

export const metadata: Metadata = {
    title: "Wiz World",
    description: "Discover houses from the Wiz World",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${verdana.variable}`}>
            <body>{children}</body>
        </html>
    );
}
