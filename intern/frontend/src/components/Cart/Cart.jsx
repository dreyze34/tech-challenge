import * as React from "react";

const Cart = (props) => {
  return (
    <div className="card w-50 m-4 pb-4">
      <h1 className="card-header">Shopping Cart</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.filter((product) => props.inCartProducts[product.id] > 0).map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{props.inCartProducts[product.id]}</td>
              <td>{product.price}$</td>
              <button
                    onClick={() => props.onRemoveFromCart(product.id)}
                    className="btn btn-primary"
                  >
                    Remove
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      <span className="mx-auto">Total: {calculateTotal(props)}$</span>
    </div>
  );
};

function calculateTotal(props) {
  let total = 0;
  props.products.forEach(product => {
    const qty = props.inCartProducts[product.id] || 0;
    total += product.price * qty;
  })
  return total;
}

export { Cart };
