
export interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  imageUrl: string;
  slug: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
}
