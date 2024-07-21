import { MetadataRoute } from 'next';
import meta from '@/config/metadata';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${meta.url}/sitemap.xml`,
    host: meta.url,
  };
}
