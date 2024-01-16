import React, { useContext } from "react";
import useList from "../../hooks/useList";
import List from "../../components/List";
import { AppContext } from "../../providers/AppContextProvider";

const BetList = () => {
  const { data, isLoading } = useList();
  const { basketItem, setBasketItem } = useContext(AppContext);

  const handleClick = (id) => {
    if (basketItem.includes(id)) {
      setBasketItem(basketItem.filter((item) => item !== id));
    } else {
      setBasketItem([...basketItem, id]);
    }
  };

  return (
    <List data={data} isLoading={isLoading}>
        <List.ListItem
          onClick={(dataIndex) => handleClick(data[dataIndex]?.NID)}
          dataKey="NID"
          isSelected={(dataIndex) => basketItem.includes(data[dataIndex]?.NID)}
        />
    </List>
  );
};

export default BetList;
