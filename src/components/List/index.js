import React, { useRef } from "react";
import { FixedSizeList as VList } from "react-window";

const List = ({ data, isLoading, children }) => {
  const containerRef = useRef(null);

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
          {({ index, style }) =>
            React.cloneElement(children, {
              index,
              style,
              data: data[index],
            })
          }
        </VList>
      )}
    </div>
  );
};

List.ListItem = ({ index, style, onClick, isSelected, data, dataKey }) => {
  return (
    <div
      style={style}
      className={`cursor-pointer border-b border-gray-300 flex justify-center items-center ${
        isSelected(index) && "bg-gray-200"
      }`}
      onClick={() => onClick(index)}
    >
      <List.NameCell index={index} style={{ width: "20%" }} data={data} />
      {data[dataKey]}
    </div>
  );
};

export default List;
