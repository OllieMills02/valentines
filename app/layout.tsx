import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Box} from "@mui/system";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import {Providers} from "./providers";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valentine's Ask",
  description: "A playful Valentine-themed page with a dodging No button.",
};

const heartsPattern =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 28S4 19.2 4 11.5 8.5 4 16 10c7.5-6 12-2.5 12 1.5 0 7.7-12 16-12 16z' fill='%23f472b6'/%3E%3C/svg%3E\")";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Providers>
            <Box
              className={"flex min-h-screen items-center justify-center"}
              sx={{
                width: "100%",
                backgroundColor: "#fff1f2",
                backgroundImage: heartsPattern,
                backgroundSize: "120px 120px",
                backgroundRepeat: "repeat",
                backgroundAttachment: "fixed",
                padding: "2rem 1rem",
              }}
            >
              {children}
            </Box>
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
