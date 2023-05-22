import React from "react";
import Add from "../assets/add.png";
import minus from "../assets/minus.png";
import remove from "../assets/delete.png";
import phone from "../assets/phone.avif";

type ComponentState = {
  price: number;
  Qty: number;
  title: string;
  img: string;
};

class CartItem extends React.Component<{}, ComponentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      price: 9999,
      Qty: 1,
      title: "mobile Phone",
      img: "",
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  increaseQuantity = () => {
    console.log("this: ", this.state.Qty);

    //If we dont require previous state then use this
    // this.setState({
    //   Qty: this.state.Qty + 1
    // });

    //Else Use this
    //Set state is a function from React.Component
    this.setState((prevState) => {
      return {
        Qty: prevState.Qty + 1,
      };
    });
  };

  decreaseQuantity = () => {
    this.setState((prevState) => {
      if (prevState.Qty > 1) {
        return {
          Qty: prevState.Qty - 1,
        };
      } else {
        return {
          Qty: prevState.Qty,
        };
      }
    });
  };

  render() {
    const { price, Qty, title } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={phone} alt="Phone Image" />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div>Rs. {price}</div>
          <div>Quantity: {Qty}</div>

          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              className="action-icons"
              src={Add}
              alt="increase quantity"
              onClick={this.increaseQuantity}
            />
            <img
              className="action-icons"
              src={minus}
              alt="decrease quantity"
              onClick={this.decreaseQuantity}
            />
            <img className="action-icons" src={remove} alt="remove item" />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    width: 110,
    height: 110,
  },
};

export default CartItem;
