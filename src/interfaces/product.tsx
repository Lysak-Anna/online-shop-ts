export interface IProduct {
  id: string;
  image: string;
  title: string;
  price: number;
}
export interface IProductsList {
  products: IProduct[];
}
