import React from "react";

const Basket = ({ basketItems = [] }) => {
  return (
    <div
      className={`min-w-[300px] max-w-[500px] border border-gray-800 flex flex-col bg-white p-3`}
    >
      içerik sayısı : {basketItems.length}
      <hr />
      <p>Toplam Tutar: 0 TL</p>
    </div>
  );
};

export default Basket;
