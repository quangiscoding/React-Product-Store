import { useCart } from "../context/CartContext.jsx";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
    clearCart,
  } = useCart();

  return (
    <div
      className={`fixed top-24 right-6 max-w-150 ${cartItems.length > 0 ? "h-[80%]" : ""} overflow-y-auto bg-white dark:bg-gray-900 shadow-2xl rounded-xl p-6 space-y-4 z-50`}
    >
      <h2 className="text-2xl dark:text-white font-bold">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="dark:text-white">Cart is empty</p>
      ) : (
        <>
          <div className="max-h-[80%] overflow-y-auto flex flex-col gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-4 border p-4 rounded-lg dark:bg-gray-500"
              >
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl text-black dark:text-white font-bold">
                    {item.title}
                  </h2>
                  <p className="text-md text-gray-500 dark:text-white">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    className="btn btn-secondary"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeProduct(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <button
              onClick={clearCart}
              className="btn btn-danger fit-content block"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
