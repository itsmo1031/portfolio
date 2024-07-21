import { MetadataRoute } from 'next';
import meta from '@/config/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: meta.url,
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
