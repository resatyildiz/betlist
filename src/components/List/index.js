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
          itemSize={50}
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

function ListItem({ style, isSelected, children, data }) {
  return (
    <div
      style={style}
      className={`border-b border-gray-300 flex justify-start ${
        isSelected(!!data) && "bg-gray-200"
      }`}
    >
      {children({ data })}
    </div>
  );
}

function Cell({ children, className, onClick }) {
  return (
    <div
      className={`flex justify-center items-center text-xs ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

List.ListItem = ListItem;
List.Cell = Cell;

export default List;
