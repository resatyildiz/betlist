import React, { useContext } from "react";
import BasketComp from "../../components/Basket";
import { AppContext } from "../../providers/AppContextProvider";

const Basket = () => {
  const { basketItem } = useContext(AppContext);

  return (
    <div className="absolute bottom-0 right-0">
      <BasketComp basketItems={basketItem} />
    </div>
  );
};

export default Basket;
