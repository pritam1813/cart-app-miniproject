import CartIcon from "../assets/shopping-cart.svg";

type NavbarProps = {
  getProductCount: () => number;
};

const Navbar: React.FC<NavbarProps> = ({ getProductCount }) => {
  return (
    <div className="navbar">
      <div className="appTitle">Cart</div>
      <div className="cartIconContainer">
        <img
          className="cartIcon"
          width="32"
          height="32"
          src={CartIcon}
          alt="Cart Icon For Navbar"
        />
        <span className="cartCount">{getProductCount()}</span>
      </div>
    </div>
  );
};

export default Navbar;
