export interface IProduct {
  id: number;
  brand: string;
  category: string;
  description: string;
  discountPer: number;
  thumbnail: string;
  title: string;
  price: number;
  rating: number;
  stock: number;
  images: string[];
}
export interface IProductsList {
  products: IProduct[];
}
