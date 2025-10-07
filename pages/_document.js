// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="vi">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="A8421j-YSZe5Bep3sj46uy2R87M3d5gz_1B_AemcfMM" />
        {/* Global SEO Meta Tags */}
        <meta name="application-name" content="Q8 Design" />
        <meta name="apple-mobile-web-app-title" content="Q8 Design" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Critical preconnect - highest priority for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Analytics and tracking - medium priority */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* Social media and external resources - lower priority */}
        <link rel="preconnect" href="https://www.facebook.com" />
        <link rel="preconnect" href="https://www.instagram.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://zalo.me" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://unpkg.com" />
        
        {/* DNS Prefetch for additional performance boost */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.facebook.com" />
        <link rel="dns-prefetch" href="//www.instagram.com" />
        <link rel="dns-prefetch" href="//www.youtube.com" />
        <link rel="dns-prefetch" href="//zalo.me" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="//unpkg.com" />
        
        {/* Preload critical fonts for better performance */}
        <link 
          rel="preload" 
          href="/fonts/Satoshi-Regular.otf" 
          as="font" 
          type="font/otf" 
          crossOrigin="anonymous" 
        />
        <link 
          rel="preload" 
          href="/fonts/Satoshi-Medium.otf" 
          as="font" 
          type="font/otf" 
          crossOrigin="anonymous" 
        />
        <link 
          rel="preload" 
          href="/fonts/Satoshi-Bold.otf" 
          as="font" 
          type="font/otf" 
          crossOrigin="anonymous" 
        />
        <link 
          rel="preload" 
          href="/fonts/Geogtq-Rg.otf" 
          as="font" 
          type="font/otf" 
          crossOrigin="anonymous" 
        />
        <link 
          rel="preload" 
          href="/fonts/Geogtq-Bd.otf" 
          as="font" 
          type="font/otf" 
          crossOrigin="anonymous" 
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

