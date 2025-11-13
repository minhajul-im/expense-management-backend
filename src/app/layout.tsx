import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GrowNext",
  description: "Your application description",
  openGraph: {
    title: "GrowNext",
    description: "Your application description",
    url: "https://grownext.vercel.app/",
    siteName: "GrowNext",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GrowNext Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-gabarito">{children}</body>
    </html>
  );
}
