'use client';

export default function JsonLd() {
  // Organization schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NextMove AI',
    url: 'https://next-move.ai',
    logo: 'https://next-move.ai/img/logo.png',
    sameAs: [
      'https://www.linkedin.com/company/nextmove-ai',
      'https://twitter.com/nextmove_ai'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '',
      contactType: 'customer service',
      email: 'info@next-move.ai',
      availableLanguage: ['German', 'English']
    }
  };

  // Website schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NextMove AI',
    url: 'https://next-move.ai',
    description: 'Wir begleiten Unternehmen am Anfang ihrer KI-Reise mit erprobten Prozessen und praxisnahen Lösungen.',
    inLanguage: 'de-DE'
  };

  // Service schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'KI-Transformation',
    provider: {
      '@type': 'Organization',
      name: 'NextMove AI'
    },
    description: 'Wir begleiten Unternehmen am Anfang ihrer KI-Reise mit erprobten Prozessen und praxisnahen Lösungen.',
    areaServed: 'DE',
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Unternehmen'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
