import { ShoppingCart, Sun, Moon } from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useTheme } from "../context/ThemeContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { useCart } from "../context/CartContext.jsx";

const Navbar = ({ search, setSearch, setShowCart }) => {
  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useAuth();

  const { totalQuantity } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 shadow-sm">
      <div className="w-full mx-auto px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 whitespace-nowrap">
          Minh Quang Galaxy
        </h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 max-w-md px-4 py-2 rounded-lg border border-gray-500 bg-white dark:bg-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Auth */}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="dark:text-white font-medium whitespace-nowrap">
                Hi, {user.name}
              </span>

              <button
                onClick={logout}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:opacity-90 transition cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:opacity-90 transition cursor-pointer"
            >
              Login
            </button>
          )}

          {/* Theme Toggle */}
          <button className="btn btn-secondary" onClick={toggleTheme}>
            {theme === "light" ? <Sun /> : <Moon />}
          </button>

          {/* Cart */}
          <button
            className="btn btn-primary flex items-center gap-2"
            onClick={() => setShowCart((prev) => !prev)}
          >
            <ShoppingCart size={18} />
            <span>{totalQuantity}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
