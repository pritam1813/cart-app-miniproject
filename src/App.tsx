import React from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import assets from "./assets/index";

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

class App extends React.Component<{}, CartState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      products: [
        {
          price: 99,
          title: "Watch",
          qty: 2,
          img: assets.watchImage,
          id: 1,
        },
        {
          price: 999,
          title: "Mobile Phone",
          qty: 3,
          img: assets.phoneImage,
          id: 2,
        },
        {
          price: 999,
          title: "Laptop",
          qty: 1,
          img: assets.laptopImage,
          id: 3,
        },
        {
          price: 99,
          title: "Earphones",
          qty: 2,
          img: assets.earphoneImage,
          id: 4,
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

  getProductCount = (): number => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };

  render() {
    const { products } = this.state;
    return (
      <>
        <Navbar getProductCount={this.getProductCount} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
      </>
    );
  }
}

export default App;
