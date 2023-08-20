import React from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

type Product = {
  price: number;
  title: string;
  qty: number;
  img: string;
  id: string;
};

type CartProps = {
  products: Product[];
  onIncreaseQuantity: (product: Product) => void;
  onDecreaseQuantity: (product: Product) => void;
  onDeleteProduct: (id: string) => void;
  productCount: number;
  productTotalPrice: number;
};

const Cart: React.FC<CartProps> = ({
  products,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onDeleteProduct,
  productCount,
  productTotalPrice,
}) => {
  return (
    // <div classNameNameName="cart-wrap">
    //   {products.map((product) => (
    //     <CartItem
    //       key={product.id}
    //       product={product}
    //       onIncreaseQuantity={onIncreaseQuantity}
    //       onDecreaseQuantity={onDecreaseQuantity}
    //       onDeleteProduct={onDeleteProduct}
    //     />
    //   ))}
    // </div>
    <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{ borderRadius: "15x" }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </h1>
                        <h6 className="mb-0 text-muted">
                          {productCount} items
                        </h6>
                      </div>
                      <hr className="my-4" />

                      {products.map((product) => (
                        <CartItem
                          key={product.id}
                          product={product}
                          onIncreaseQuantity={onIncreaseQuantity}
                          onDecreaseQuantity={onDecreaseQuantity}
                          onDeleteProduct={onDeleteProduct}
                        />
                      ))}

                      <hr className="my-4" />

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <a href="#!" className="text-body">
                            <i className="fas fa-long-arrow-alt-left me-2"></i>
                            Back to shop
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <CartSummary
                    productCount={productCount}
                    productTotalPrice={productTotalPrice}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
