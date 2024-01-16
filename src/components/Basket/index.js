import React from "react";

const Basket = ({ basketItems = [] }) => {
  return (
    <div
      className={`min-w-[300px] max-w-[500px] border border-gray-800 flex flex-col bg-white p-3`}
    >
      {basketItems.map((item, index) => {
        return (
          <>
            <p key={item.id}>
              Kod: {item.data.C}&nbsp; Maç : {item.data.N}&nbsp;{" "}
              <span className="font-semibold">Oran: {item.O}</span>
            </p>
            <hr />
          </>
        );
      })}
      <p>
        Toplam Tutar:&nbsp;
        {basketItems.reduce((prev, curr, index) => {
          return index === 0 ? prev : (prev * parseFloat(curr.O)).toFixed(2);
        }, parseFloat(basketItems[0]?.O || 0))}
        &nbsp; TL
      </p>
    </div>
  );
};

export default Basket;
