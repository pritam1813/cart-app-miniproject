import React from "react";

class CartItem extends React.Component {
    render ()  {
        return (
            <div className='cart-item'>
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>Phone</div>
                    <div>Rs. 9999</div>
                    <div>Qty: 1</div>
                </div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    {/* <span>add</span>
                    <span>remove</span>
                    <span>delete</span> */}
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        width: 100,
        height: 100,
        borderRadius: 4,
        backgroundColor: '#ccc'
    }
}

export default CartItem;