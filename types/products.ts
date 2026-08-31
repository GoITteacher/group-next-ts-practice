export interface Product {
  _id: string;
  name: string;
}
export interface ProductResponse {
  products: Product[];
}

export interface ProductBody {
  name: string;
  img: string;
  category: string;
  price: number;
  size: string;
  is10PercentOff: boolean;
  popularity: number;
}
