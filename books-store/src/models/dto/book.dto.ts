export interface Book {
  title: string;
  id: string;
  thumbnailUrl: string;
  description?: string;
  authors: string[];
  categories?: string[];
  availableOnStock: number;
  price: number;
}
