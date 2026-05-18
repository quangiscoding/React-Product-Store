import React from "react";
import { SearchX } from "lucide-react";

const NoProductFound = () => {
  return (
    <div className="w-full flex items-center justify-center py-20 px-4">
      <div className="flex flex-col items-center text-center max-w-md">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-gray-800 flex items-center justify-center mb-5">
          <SearchX className="w-10 h-10 text-blue-500 dark:text-gray-400" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          No Products Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 dark:text-gray-100">
          We couldn&apos;t find any products matching your search. Try using
          different keywords.
        </p>
      </div>
    </div>
  );
};

export default NoProductFound;
