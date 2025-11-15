import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonicalUrl }) => {
  useEffect(() => {
    document.title = title;

    const setMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('description', description);
    setMetaTag('keywords', keywords);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    } else if (canonicalLink) {
      document.head.removeChild(canonicalLink);
    }
  }, [title, description, keywords, canonicalUrl]);

  return null;
};

export default SEO;
