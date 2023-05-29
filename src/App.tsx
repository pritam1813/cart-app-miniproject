import React from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { collection, onSnapshot } from "firebase/firestore";
import db from "./main";

type Product = {
  price: number;
  title: string;
  qty: number;
  img: string;
  id: string;
};

type CartState = {
  products: Product[];
  loading: boolean;
};

class App extends React.Component<{}, CartState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      products: [],
      loading: true,
    };
  }

  // async componentDidMount() {
  //   const productsCollection = collection(db, "products");
  //   const querySnapshot = await getDocs(productsCollection);

  //   let products = querySnapshot.docs.map((doc) => {
  //     const productData = doc.data();

  //     // Explicitly casting the productData to the Product type
  //     const product: Product = {
  //       price: productData.price,
  //       title: productData.title,
  //       qty: productData.qty,
  //       img: productData.img,
  //       id: doc.id,
  //     };

  //     return product;
  //   });
  //   this.setState({ products, loading: false });
  // }
  componentDidMount() {
    onSnapshot(collection(db, "products"), (querySnapshot) => {
      let products = querySnapshot.docs.map((doc) => {
        const productData = doc.data();

        // Explicitly casting the productData to the Product type
        const product: Product = {
          price: productData.price,
          title: productData.title,
          qty: productData.qty,
          img: productData.img,
          id: doc.id,
        };

        return product;
      });

      this.setState({ products, loading: false });
    });
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

  handleDeleteProduct = (id: string): void => {
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

  getTotalPrice = (): number => {
    const { products } = this.state;

    let totalPrice = 0;

    products.forEach((product) => {
      totalPrice += product.qty * product.price;
    });

    return totalPrice;
  };

  render() {
    const { products, loading } = this.state;
    return (
      <>
        <Navbar getProductCount={this.getProductCount} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h2>Loading ...</h2>}
        <div>Total Price: {this.getTotalPrice()}</div>
      </>
    );
  }
}

export default App;
