import React from "react";

const CartItem = () => {
    return (
        <div className="flex-row">
            <div>
                <img
                    src={`/image/${item.image}`}
                    alt=""
                />
            </div>
            <div>
                <div>{item.name}, ${item.price}</div>
                <div>
                    <span>Qty:</span>
                    <input
                      type="number"
                      placeholder="1"
                      value={item.purchaseQuantity}
                    />
                    <span role="img" aria-label="trash">
                        🗑️
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;