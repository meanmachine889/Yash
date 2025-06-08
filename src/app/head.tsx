import Head from 'next/head'

export default function SEOHead() {
  return (
    <Head>
      <title>Your Name – Portfolio</title>
      <meta name="description" content="Full Stack Developer specializing in React, Node.js, and UI/UX design." />
      
      {/* Open Graph (OG) for link previews */}
      <meta property="og:title" content="Your Name – Portfolio" />
      <meta property="og:description" content="Check out my latest projects and design work." />
      <meta property="og:image" content="https://yourdomain.com/preview.jpg" />
      <meta property="og:url" content="https://yourdomain.com" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Your Name – Portfolio" />
      <meta name="twitter:description" content="Check out my latest projects and design work." />
      <meta name="twitter:image" content="https://yourdomain.com/preview.jpg" />
    </Head>
  )
}
