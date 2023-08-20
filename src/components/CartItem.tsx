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
    <div className="row mb-4 d-flex justify-content-between align-items-center">
      <div className="col-md-2 col-lg-2 col-xl-2">
        <img
          src={imageUrl}
          srcSet={srcset}
          sizes={sizes}
          width="150"
          height="150"
          alt="Item Image"
        />
      </div>
      <div className="col-md-3 col-lg-3 col-xl-3">
        <h6 className="text-muted">Item</h6>
        <h6 className="text-black mb-0">{product.title}</h6>
      </div>
      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
        <button
          className="btn btn-link px-2"
          onClick={() => onDecreaseQuantity(product)}
        >
          <i className="fas fa-minus"></i>
        </button>

        <input
          id="form1"
          min="0"
          name="quantity"
          value={product.qty}
          type="number"
          className="form-control form-control-sm"
        />

        <button
          className="btn btn-link px-2"
          onClick={() => onIncreaseQuantity(product)}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h6 className="mb-0">€ {product.price}</h6>
      </div>
      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
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

    // <div className="cart-item">
    //   <div className="left-block">
    //     <img
    //       src={imageUrl}
    //       srcSet={srcset}
    //       sizes={sizes}
    //       width="150"
    //       height="150"
    //       alt="Item Image"
    //     />
    //   </div>
    //   <div className="right-block">
    //     <div style={{ fontSize: 25 }}>{product.title}</div>
    //     <div>Rs. {product.price}</div>
    //     <div>Quantity: {product.qty}</div>

    //     <div className="cart-item-actions">
    //       {/* Buttons */}
    //       <img
    //         className="action-icons"
    //         src="https://images.pclyst.com/add.webp"
    //         alt="increase quantity"
    //         width="25"
    //         height="25"
    //         onClick={() => onIncreaseQuantity(product)}
    //       />
    //       <img
    //         className="action-icons"
    //         src="https://images.pclyst.com/minus.webp"
    //         alt="decrease quantity"
    //         width="25"
    //         height="25"
    //         onClick={() => onDecreaseQuantity(product)}
    //       />
    // <img
    //   className="action-icons"
    //   src="https://images.pclyst.com/delete.webp"
    //   alt="remove item"
    //   width="25"
    //   height="25"
    //   onClick={() => onDeleteProduct(product.id)}
    // />
    //     </div>
    //   </div>
    // </div>
  );
};

export default CartItem;
