import { Poppins } from 'next/font/google'
import "./globals.css";


const poppins = Poppins({ subsets: ['latin'],weight:['400'] })

export const metadata = {
  title: "Art Of Attitude | Sports Management",
  description: "Sports Management",
  icons: {
    icon: "/favicon.svg", // Path to your favicon file
  },
  openGraph: {
    type: "website",
    url: "https://artofattitude.com/", // Replace with your website URL
    title: "Art Of Attitude | Sports Management",
    description: "Sports Management",
    images: [
      {
        url: "/og_image.svg", // Path to your Open Graph image
        width: 1200,
        height: 630,
        alt: "Art Of Attitude OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
