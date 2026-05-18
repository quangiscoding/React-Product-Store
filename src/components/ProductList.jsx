import { useMemo } from "react";

import ProductCard from "./ProductCard.jsx";
import NoProductFound from "./NoProductFound.jsx";

const ProductList = ({ products }) => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      {products.length < 1 ? (
        <NoProductFound />
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
