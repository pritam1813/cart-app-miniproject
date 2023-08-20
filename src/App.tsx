import React from "react";
import Cart from "./components/Cart";
import {
  collection,
  onSnapshot,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
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
    // this.setState((prevState) => {
    //   const updatedProducts = prevState.products.map((p) => {
    //     if (p.id === product.id) {
    //       return {
    //         ...p,
    //         qty: p.qty + 1,
    //       };
    //     }
    //     return p;
    //   });
    //   return {
    //     products: updatedProducts,
    //   };
    // });
    const { id, qty } = product;
    const productRef = doc(db, "products", id);

    updateDoc(productRef, {
      qty: qty + 1,
    })
      .then(() => {
        console.log("Quantity Increased");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleDecreaseQuantity = (product: Product): void => {
    const { id, qty } = product;
    const productRef = doc(db, "products", id);

    if (qty === 0) {
      return;
    }

    updateDoc(productRef, {
      qty: qty - 1,
    })
      .then(() => {
        console.log("Quantity Decreased");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleDeleteProduct = (id: string): void => {
    // this.setState((prevState) => {
    //   const updatedProducts = prevState.products.filter((p) => p.id !== id);
    //   return {
    //     products: updatedProducts,
    //   };
    // });
    const productRef = doc(db, "products", id);
    deleteDoc(productRef)
      .then(() => {
        console.log("Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
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

  addProduct = () => {
    addDoc(collection(db, "products"), {
      price: 29999,
      title: "Washing Machine",
      qty: 1,
      img: "",
    })
      .then((docRef) => {
        console.log("Product Added", docRef);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { products, loading } = this.state;
    return (
      <>
        {/* <button onClick={this.addProduct}>Add Product</button> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          productCount={this.getProductCount()}
          productTotalPrice={this.getTotalPrice()}
        />
        {loading && <h2>Loading ...</h2>}
      </>
    );
  }
}

export default App;
