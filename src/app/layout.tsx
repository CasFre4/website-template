import Navbar from "../components/Navbar"
// import LayoutWrapper from "../components/LayoutWrapper";
import "../css/global.css";
// import {metadata} from './metadata'

// export {metadata}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Omar's",
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        {/* </LayoutWrapper> */}
      </body>
    </html>
  );
}