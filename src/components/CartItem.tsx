import React from "react";

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

const cloudinaryBaseUrl = "https://res.cloudinary.com/dilccvk58/image/upload";
const transformationParams = "c_fill,w_200,h_200";

const CartItem: React.FC<ComponentProps> = ({
  product,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onDeleteProduct,
}) => {
  const imageUrl = `${cloudinaryBaseUrl}/${transformationParams}/${product.img}`;
  const srcset = `${imageUrl} 200w,
                  ${imageUrl} 150w,
                  ${imageUrl} 100w`;
  const sizes = "(max-width: 400px) 100px, (max-width: 800px) 150px, 200px";

  return (
    <div className="cart-item">
      <div className="left-block">
        <img
          src={imageUrl}
          srcSet={srcset}
          sizes={sizes}
          width="150"
          height="150"
          alt="Item Image"
        />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{product.title}</div>
        <div>Rs. {product.price}</div>
        <div>Quantity: {product.qty}</div>

        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            className="action-icons"
            src="https://images.pclyst.com/add.webp"
            alt="increase quantity"
            width="25"
            height="25"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            className="action-icons"
            src="https://images.pclyst.com/minus.webp"
            alt="decrease quantity"
            width="25"
            height="25"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            className="action-icons"
            src="https://images.pclyst.com/delete.webp"
            alt="remove item"
            width="25"
            height="25"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
