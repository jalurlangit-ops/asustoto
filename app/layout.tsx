'use client';

import { Inter } from 'next/font/google';
import './globals.css';

const nameDomain = "https://www.645lottoresulttoday.com";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

function rank() {
    return {
      __html: `{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "https://www.645lottoresulttoday.com",
    "operatingSystem": "ANDROID",
    "applicationCategory": "GameApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "7143729"
    },
	"review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
	"author": {
            "@type": "Person",
            "name": "Asustoto : Situs Slot Gacor 2025 Dan Link Gacor Hari Ini",
            "reviewBody": "Asustoto hadir sebagai situs slot gacor 2025 yang menawarkan pengalaman bermain slot online terbaik untuk para penggemar judi online. Dengan berbagai pilihan permainan dari provider ternama, Asustoto menjamin permainan yang adil dan berkualitas tinggi"
          }
        },
    "offers": {
      "@type": "Offer",
      "price": "10000",
      "priceCurrency": "IDR"
    }
  }
  `,
    };
  }

function histats() {
    return {
      __html: `
        var _Hasync= _Hasync|| [];
        _Hasync.push(['Histats.start', '1,4921038,4,5,172,25,00010000']);
        _Hasync.push(['Histats.fasi', '1']);
        _Hasync.push(['Histats.track_hits', '']);
        (function() {
        var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
        hs.src = ('//s10.histats.com/js15_as.js');
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
        })();
      `,
    };
  };

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-browser="chrome">
      <head>
        <title>Asustoto : Situs Slot Gacor 2025 Dan Link Gacor Hari Ini</title>
        <meta name="description" content="Asustoto hadir sebagai situs slot gacor 2025 yang menawarkan pengalaman bermain slot online terbaik untuk para penggemar judi online. Dengan berbagai pilihan permainan dari provider ternama, Asustoto menjamin permainan yang adil dan berkualitas tinggi" />
        <meta name="keywords" content="Asustoto, Situs Slot Gacor 2025, Link Gacor Hari Ini, Deposit Via E Wallet, Slot Tergacor Hari Ini, Daftar Slot Online, Slot Online Terpercaya, Link Slot Terpercaya, Slot Depo 10K, situs Slot Gacor 2025 Terpercaya" />
        <meta name="google-site-verification" content="Xj0jSVoTs_MokmU02LHvltqDaykUx1sqD2uUYsGdbfo" />
        <meta name="application-name" content="asustoto" />
        <link rel="author" href={nameDomain} />
        <link rel="canonical" href={nameDomain} />
        <meta name="author" content="asustoto" />
        <meta name="publisher" content="asustoto" />
        <meta name="copyright" content="asustoto" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="category" content="slot" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="language" content="id-ID" />
        <meta name="rating" content="general" />
        <meta name="geo.country" content="ID" />
        <meta name="page-locale" content="id,en" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="distribution" content="global" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta property="og:title" content="Asustoto : Situs Slot Gacor 2025 Dan Link Gacor Hari Ini" />
        <meta property="og:description" content="Asustoto hadir sebagai situs slot gacor 2025 yang menawarkan pengalaman bermain slot online terbaik untuk para penggemar judi online. Dengan berbagai pilihan permainan dari provider ternama, Asustoto menjamin permainan yang adil dan berkualitas tinggi" />
        <meta property="og:url" content={nameDomain} />
        <meta property="og:site_name" content="asustoto" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image" content={nameDomain} />
        <meta property="og:image:width" content="840" />
        <meta property="og:image:height" content="480" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="asustoto" />
        <meta name="twitter:title" content="Asustoto : Situs Slot Gacor 2025 Dan Link Gacor Hari Ini" />
        <meta name="twitter:description" content="Asustoto hadir sebagai situs slot gacor 2025 yang menawarkan pengalaman bermain slot online terbaik untuk para penggemar judi online. Dengan berbagai pilihan permainan dari provider ternama, Asustoto menjamin permainan yang adil dan berkualitas tinggi" />
        <meta name="twitter:image" content={nameDomain} />
        <link rel="icon" href="/favicon.ico?favicon.088e6c96.ico" sizes="256x256" type="image/x-icon" />
        <meta name="next-size-adjust" content="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={rank()} key="product-jsonld" />
        <script dangerouslySetInnerHTML={histats()} type="text/javascript" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
