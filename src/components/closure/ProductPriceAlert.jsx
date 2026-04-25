import React from "react";

const showPrice = (product, price) => {
  return () => {
    alert(`${product} price is ₹${price}`);
  };
};

const ProductPriceAlert = () => {
  const products = [
    { name: "Apple", price: 100 },
    { name: "Mango", price: 80 },
    { name: "Orange", price: 60 },
  ];

  return (
    <div className="w-full max-w-md p-6 bg-white shadow-md rounded-2xl ">
      <div className="text-center ">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">
          Product Closure
        </h1>

        <div className="flex justify-center gap-4">
          {products.map((p) => (
            <button
              key={p.name}
              onClick={showPrice(p.name, p.price)}
              className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-xl"
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPriceAlert;
