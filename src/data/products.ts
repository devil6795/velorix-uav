export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  price: number | null;
  status: 'coming-soon' | 'available' | 'pre-order';
  specifications: Record<string, string>;
}

export const products: Product[] = [
  {
    id: 'prod-01',
    name: 'Coming Soon',
    slug: 'coming-soon-01',
    category: 'Components',
    description: 'Product details will be announced shortly.',
    image: '/media/store/placeholder-01.webp',
    price: null,
    status: 'coming-soon',
    specifications: {}
  },
  {
    id: 'prod-02',
    name: 'Coming Soon',
    slug: 'coming-soon-02',
    category: 'Components',
    description: 'Product details will be announced shortly.',
    image: '/media/store/placeholder-02.webp',
    price: null,
    status: 'coming-soon',
    specifications: {}
  },
  {
    id: 'prod-03',
    name: 'Coming Soon',
    slug: 'coming-soon-03',
    category: 'Accessories',
    description: 'Product details will be announced shortly.',
    image: '/media/store/placeholder-03.webp',
    price: null,
    status: 'coming-soon',
    specifications: {}
  },
  {
    id: 'prod-04',
    name: 'Coming Soon',
    slug: 'coming-soon-04',
    category: 'Apparel',
    description: 'Product details will be announced shortly.',
    image: '/media/store/placeholder-04.webp',
    price: null,
    status: 'coming-soon',
    specifications: {}
  },
  {
    id: 'prod-05',
    name: 'Coming Soon',
    slug: 'coming-soon-05',
    category: 'Hardware',
    description: 'Product details will be announced shortly.',
    image: '/media/store/placeholder-05.webp',
    price: null,
    status: 'coming-soon',
    specifications: {}
  },
  {
    id: 'prod-06',
    name: 'Coming Soon',
    slug: 'coming-soon-06',
    category: 'Hardware',
    description: 'Product details will be announced shortly.',
    image: '/media/store/placeholder-06.webp',
    price: null,
    status: 'coming-soon',
    specifications: {}
  }
];
