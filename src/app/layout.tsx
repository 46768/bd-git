import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/nav/NavBar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "BD Git",
    description: "Teaching how to use git",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="light">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased h-svh flex flex-col`}
            >
                <div className="grow-0">
                    <NavBar />
                </div>

                <div className="grow min-h-0">{children}</div>
            </body>
        </html>
    );
}
