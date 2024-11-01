export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerInfo: {
    name: string;
    address: string;
    phone: string;
    email: string;
  };
  status: 'pending' | 'confirmed' | 'delivered';
  createdAt: Date;
}