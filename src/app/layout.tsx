import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import '../../styles/globals.css';
// import dynamic from "next/dynamic";

// const  ThemeProviders = dynamic(() => import('./theme-providers'), { ssr: false })

// const inter = Inter({ subsets: ["latin"] });

const IBM_Plex = IBM_Plex_Mono({
  subsets: ['latin'],
  style: ['normal'],
  weight: [   '400', '700', ]
});

export const metadata: Metadata = {
  title: 'flexiple',
  description: ''
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang='en'>
      <body className={IBM_Plex.className}>{children}</body>
    </html>
  );
}
