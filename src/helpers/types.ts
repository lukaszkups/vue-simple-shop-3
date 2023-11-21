export interface ProductItem {
  id: number;
  name: String;
  images: String[];
  description: String;
  price: string;
}

export interface ProductListItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

export interface CartItem extends ProductItem {
  quantity: number;
}
