import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center gap-3 justify-center mt-6">
      {/* Page 1 - Active */}
      <button className="bg-yellow-700 text-white w-10 h-10 rounded-lg font-semibold">
        1
      </button>

      {/* Page 2 */}
      <button className="bg-amber-50 text-black w-10 h-10 rounded-lg font-medium">
        2
      </button>

      {/* Page 3 */}
      <button className="bg-amber-50 text-black w-10 h-10 rounded-lg font-medium">
        3
      </button>

      {/* Next Button */}
      <button className="bg-amber-50 text-black px-4 h-10 rounded-lg font-medium">
        Next
      </button>
    </div>
  );
};

export default Pagination;
