import React from "react";
import Add from '../assets/add.png';
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
  }

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
            <img className="action-icons" src={Add} alt="increase quantity" />
            <img className="action-icons" src={minus} alt="decrease quantity" />
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