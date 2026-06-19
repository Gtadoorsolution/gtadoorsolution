import Head from 'next/head';
import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

export default function SEO({
  title = "GTADOORSOLUTION",
  description = "MAKING SURE THE KEYS ARE IN YOUR HANDS",
  ogImage = "/LogoBaner.svg",
  ogUrl = "https://gtadoorsolutions.ca/",
  canonical,
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" key="og_type" />
      <meta property="og:title" content={title} key="og_title" />
      <meta property="og:description" content={description} key="og_description" />
      <meta property="og:image" content={ogImage} key="og_image" />
      <meta property="og:url" content={ogUrl} key="og_url" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" key="twitter_card" />
      <meta name="twitter:title" content={title} key="twitter_title" />
      <meta name="twitter:description" content={description} key="twitter_description" />
      <meta name="twitter:image" content={ogImage} key="twitter_image" />
      
      {/* Canonical Link */}
      {canonical && <link rel="canonical" href={canonical} key="canonical" />}
    </Head>
  );
}
