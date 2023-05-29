import React from "react";
import Add from "../assets/add.png";
import minus from "../assets/minus.png";
import remove from "../assets/delete.png";

type Product = {
  price: number;
  title: string;
  qty: number;
  img: string;
  id: string;
};

type ComponentProps = {
  product: Product;
  onIncreaseQuantity: (product: Product) => void;
  onDecreaseQuantity: (product: Product) => void;
  onDeleteProduct: (id: string) => void;
};

const CartItem: React.FC<ComponentProps> = ({
  product,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onDeleteProduct,
}) => {
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} alt="Phone Image" />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{product.title}</div>
        <div>Rs. {product.price}</div>
        <div>Quantity: {product.qty}</div>

        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            className="action-icons"
            src={Add}
            alt="increase quantity"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            className="action-icons"
            src={minus}
            alt="decrease quantity"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            className="action-icons"
            src={remove}
            alt="remove item"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    width: 110,
    height: 110,
  },
};

export default CartItem;