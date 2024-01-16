import React, { useRef, useContext } from "react";
import useList from "../../hooks/useList";
import { FixedSizeList as VList } from "react-window";
import { AppContext } from "../../providers/AppContextProvider";

const Row = ({ index, style }) => {
  const { data } = useList();
  const { setBasketItem, basketItem } = useContext(AppContext);

  const handleClick = (id) => {
    if (basketItem.includes(id)) {
      setBasketItem(basketItem.filter((item) => item !== id));
    } else {
      setBasketItem([...basketItem, id]);
    }
  };

  return (
    <div
      style={style}
      className={`cursor-pointer border-b border-gray-300 flex justify-center items-center ${
        basketItem.includes(data[index].NID) && "bg-gray-200"
      }`}
      onClick={() => handleClick(data[index].NID)}
    >
      {data[index].NID}
    </div>
  );
};

const BetList = () => {
  const containerRef = useRef();
  const { data, isLoading } = useList();

  return (
    <div ref={containerRef} className="h-screen w-screen relative">
      {isLoading && <div>Loading...</div>}
      {data && (
        <VList
          itemCount={data.length}
          itemSize={35}
          height={containerRef.current.clientHeight || 600}
          width={containerRef.current.clientWidth || 900}
        >
          {Row}
        </VList>
      )}
    </div>
  );
};

export default BetList;
