import CartIcon from "../assets/shopping-cart.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="cartIconContainer">
        <img className="cartIcon" src={CartIcon} alt="Cart Icon For Navbar" />
        <span className="cartCount">3</span>
      </div>
    </div>
  );
};

export default Navbar;