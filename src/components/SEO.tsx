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
  ogImage = "/open-graph-logo.jpg",
  ogUrl = "https://gtadoorsolutions.ca/",
  canonical,
}: SEOProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "GTA Door Solutions",
    "url": "https://gtadoorsolutions.ca",
    "telephone": "+14372142768",
    "email": "gtadoorsolution@gmail.com",
    "description": "Professional 24/7 locksmith & commercial door repair services in Toronto & GTA.",
    "areaServed": [
      "Toronto", "North York", "Scarborough", "Markham",
      "Pickering", "Ajax", "Whitby", "Oshawa",
      "Vaughan", "Richmond Hill", "Brampton", "Mississauga"
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "image": "https://gtadoorsolutions.ca/open-graph-logo.jpg"
  };

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

      {/* Structured Data: LocalBusiness */}
      <script
        type="application/ld+json"
        key="local-business-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </Head>
  );
}
