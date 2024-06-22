import { useState } from "react";

function StateUpdate() {
  const [cart, updateCart] = useState({
    discount: 0.1,
    items: [
      { product: "1", quantity: 1 },
      { product: "2", quantity: 2 },
      { product: "3", quantity: 3 },
    ],
  });
  const increaseQuanity = (productId: string) => {
    console.log(productId);
    updateCart({
      ...cart,
      items: cart.items.map((item) => {
        console.log(item.product === productId);
        return item.product === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      }),
    });
  };
  return (
    <div>
      <ul>
        <li>Cart Discount:</li>
        <li>{cart.discount}</li>
        <li onClick={() => increaseQuanity("1")}>Cart Items:</li>
        {cart.items.map((item) => {
          return (
            <li>
              {item.product} - {item.quantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StateUpdate;
