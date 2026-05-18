import React from "React";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useCart } from "../context/CartContext.jsx";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { user } = useAuth();
  const { addProduct } = useCart();
  const { title, price, image } = product;

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    addProduct(product);
  };

  return (
    <li className="flex flex-col rounded-md overflow-hidden shadow-sm bg-white dark:bg-gray-900">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <h3 className="text-2xl font-bold line-clamp-1 dark:text-white">
          {title}
        </h3>

        <p className="text-gray-500 italic line-clamp-2 dark:text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel cumque,
          amet corporis adipisci voluptate accusantium dolor nostrum explicabo
          mollitia vero?
        </p>

        <span className="text-xl text-blue-500 dark:text-blue-200 font-bold">
          ${price}
        </span>

        {/* Buttons */}
        <div className="mt-auto flex gap-2">
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="btn btn-secondary">View</button>
        </div>
      </div>
    </li>
  );
};

export default React.memo(ProductCard);
