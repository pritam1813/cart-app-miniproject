import React from "react";
import CartItem from "./CartItem";

type Product = {
  price: number;
  title: string;
  qty: number;
  img: string;
  id: number;
};

type CartProps = {
  products: Product[];
  onIncreaseQuantity: (product: Product) => void;
  onDecreaseQuantity: (product: Product) => void;
  onDeleteProduct: (id: number) => void;
};

const Cart: React.FC<CartProps> = ({
  products,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onDeleteProduct,
}) => {
  return (
    <div className="cart-wrap">
      {products.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          onIncreaseQuantity={onIncreaseQuantity}
          onDecreaseQuantity={onDecreaseQuantity}
          onDeleteProduct={onDeleteProduct}
        />
      ))}
    </div>
  );
};

export default Cart;