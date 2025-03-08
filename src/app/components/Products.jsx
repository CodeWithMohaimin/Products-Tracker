"use client";

import BoughtedProducts from "../data/products";

const Products = () => {
  const calculateUsageDays = (buyDate, deadDate) => {
    const formatDate = (dateStr) => {
      const [day, month, year] = dateStr.split("/");
      return new Date(`${year}-${month}-${day}`);
    };

    const buy = formatDate(buyDate);
    const dead = deadDate ? formatDate(deadDate) : new Date();

    const differenceInTime = dead - buy;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

    return differenceInDays;
  };

  return (
    <div className="max-w-[1700px] mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {BoughtedProducts.map((card) => (
          <div
            key={card.id}
            className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500">Bought ➤ {card.bought}</p>
              <p className="text-gray-500">
                Unusable ➤ {card.Unusable ? card.Unusable : "Still in use"}
              </p>
              <p className="text-gray-500 font-semibold border-b border-gray-200 mb-2">
                Used for ➤ {calculateUsageDays(card.bought, card.Unusable)} days
              </p>

              <p>
                Price:{" "}
                <span className="bg-green-300 px-2 py-[1px] rounded-full">
                  ৳ {card.price}
                </span>{" "}
              </p>
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-gray-500">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
