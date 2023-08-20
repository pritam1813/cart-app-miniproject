import { Component } from "react";

interface CartSummaryProps {
  productCount: number;
  productTotalPrice: number;
}

class CartSummary extends Component<CartSummaryProps> {
  constructor(props: CartSummaryProps) {
    super(props);
  }
  render() {
    return (
      <div className="col-lg-4 bg-grey">
        <div className="p-5">
          <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
          <hr className="my-4" />

          <div className="d-flex justify-content-between mb-4">
            <h5 className="text-uppercase">items {this.props.productCount}</h5>
            <h5>€ {this.props.productTotalPrice}</h5>
          </div>

          <h5 className="text-uppercase mb-3">Shipping</h5>

          <div className="mb-4 pb-2">
            <select className="select">
              <option value="1">Standard-Delivery- €5.00</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
            </select>
          </div>

          <h5 className="text-uppercase mb-3">Give code</h5>

          <div className="mb-5">
            <div className="form-outline">
              <input
                type="text"
                id="form3Examplea2"
                className="form-control form-control-lg"
              />
              <label className="form-label" htmlFor="form3Examplea2">
                Enter your code
              </label>
            </div>
          </div>

          <hr className="my-4" />

          <div className="d-flex justify-content-between mb-5">
            <h5 className="text-uppercase">Total price</h5>
            <h5>€ {this.props.productTotalPrice + 5}</h5>
          </div>

          <button
            type="button"
            className="btn btn-dark btn-block btn-lg"
            data-mdb-ripple-color="dark"
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default CartSummary;
