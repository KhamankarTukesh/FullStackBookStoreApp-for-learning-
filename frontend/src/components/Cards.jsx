import React from 'react';

function Cards({ item }) {
  // Guard: avoid crashes when item is missing
  if (!item) {
    return (
      <div className="p-4">
        <div className="text-center text-gray-500 ">No item data</div>
      </div>
    );
  }

  const placeholder = 'https://via.placeholder.com/400x300?text=No+Image';

  return (
    <div className="mt-4 my-3 mx-2 p-3 flex justify-center hover:scale-105 duration-300 shadow-black/40">
      <div className="card w-full max-w-xs bg-base-100 shadow-xl overflow-hidden">
        <figure>
          <img
            src={item.image || placeholder}
            alt={item.name || 'Item image'}
            onError={(e) => { e.currentTarget.src = placeholder; }}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
        </figure>

        <div className="card-body bg-white text-black ">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>

          <p>{item.title}</p>

          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>

            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
