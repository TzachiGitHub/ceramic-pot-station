export type Language = 'ru' | 'en' | 'he';

export type Category = 'mugs' | 'bowls' | 'vases' | 'decorative' | 'sets';

export interface GalleryItem {
  id: string;
  category: Category;
  titleRu: string;
  titleEn: string;
  titleHe: string;
  descriptionRu: string;
  descriptionEn: string;
  descriptionHe: string;
  price: number;
  placeholder: boolean;
  imagePlaceholder: string;
  image?: string;
}

export interface ClassType {
  id: string;
  icon: string;
  nameRu: string;
  nameEn: string;
  nameHe: string;
  descriptionRu: string;
  descriptionEn: string;
  descriptionHe: string;
  duration: string;
  groupSize: string;
  price: number;
}

export interface Testimonial {
  name: string;
  text: string;
}
