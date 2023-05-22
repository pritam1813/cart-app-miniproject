import React from "react";
import CartItem from "./CartItem";

type Product = {
  price: number;
  title: string;
  qty: number;
  img: string;
  id: number;
};

type CartState = {
  products: Product[];
};

class Cart extends React.Component<{}, CartState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      products: [
        {
          price: 99,
          title: "Watch",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 999,
          title: "Mobile Phone",
          qty: 10,
          img: "",
          id: 2,
        },
        {
          price: 999,
          title: "Laptop",
          qty: 4,
          img: "",
          id: 3,
        },
      ],
    };
  }

  handleIncreaseQuantity = (product: Product): void => {
    this.setState((prevState) => {
      const updatedProducts = prevState.products.map((p) => {
        if (p.id === product.id) {
          return {
            ...p,
            qty: p.qty + 1,
          };
        }
        return p;
      });
      return {
        products: updatedProducts,
      };
    });
  };

  handleDecreaseQuantity = (product: Product): void => {
    this.setState((prevState) => {
      const updatedProducts = prevState.products.map((p) => {
        if (p.id === product.id && p.qty > 0) {
          return {
            ...p,
            qty: p.qty - 1,
          };
        }
        return p;
      });
      return {
        products: updatedProducts,
      };
    });
  };

  handleDeleteProduct = (id: number): void => {
    this.setState((prevState) => {
      const updatedProducts = prevState.products.filter((p) => p.id !== id);
      return {
        products: updatedProducts,
      };
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="cart-wrap">
        {products.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
          />
        ))}
      </div>
    );
  }
}

export default Cart;