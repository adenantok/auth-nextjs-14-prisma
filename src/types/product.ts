interface Product {
  id: string;
  name: string;
  price: number;
  createdAt: Date;
  user: {
    name: string;
  };
}

export default Product;
