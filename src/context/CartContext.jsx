import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartReducer = (state, action) => {
  const items = state.cartItems;

  const updateQuantity = (productId, amount) => {
    return items.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + amount }
        : item,
    );
  };

  switch (action.type) {
    case "ADD_PRODUCT": {
      const { payload: product } = action;
      const existing = items.find((item) => item.id === product.id);

      if (existing) {
        return {
          ...state,
          cartItems: updateQuantity(product.id, 1),
        };
      }

      return {
        ...state,
        cartItems: [...items, { ...product, quantity: 1 }],
      };
    }

    case "REMOVE_PRODUCT": {
      const { payload: productId } = action;
      return {
        ...state,
        cartItems: items.filter((item) => item.id !== productId),
      };
    }

    case "INCREASE_QUANTITY": {
      const { payload: productId } = action;
      return {
        ...state,
        cartItems: updateQuantity(productId, 1),
      };
    }

    case "DECREASE_QUANTITY": {
      const { payload: productId } = action;

      const newCartItems = updateQuantity(productId, -1).filter(
        (item) => item.quantity > 0,
      );

      return {
        ...state,
        cartItems: newCartItems,
      };
    }

    case "CLEAR_CART": {
      return {
        ...state,
        cartItems: [],
      };
    }

    default: {
      return state;
    }
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  const addProduct = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  const removeProduct = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: id });
  };

  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const totalQuantity = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        totalQuantity,
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
