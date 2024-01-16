import React, { useContext } from "react";
import useList from "../../hooks/useList";
import List from "../../components/List";
import { AppContext } from "../../providers/AppContextProvider";

const BetList = () => {
  const { data, isLoading } = useList();
  const { basketItem, setBasketItem } = useContext(AppContext);

  const handleClick = (params) => {
    if (basketItem.some((item) => item.id === params.id)) {
      setBasketItem(basketItem.filter((item) => item.id !== params.id));
    } else {
      setBasketItem([...basketItem, params]);
    }
  };

  return (
    <List data={data} isLoading={isLoading}>
      <List.ListItem isSelected={(data) => basketItem.includes(data?.NID)}>
        {({ data }) => (
          <>
            <List.Cell className={"w-[20%] border-r flex flex-col"}>
              <List.Cell className={"grow w-full h-[35px] !justify-start px-1"}>
                <span className="font-semibold">{data.C}</span>&nbsp;
                {data.T}&nbsp;
                {data.N}
              </List.Cell>
              <List.Cell
                className={"grow w-full border-t h-[15px] !justify-start px-1"}
              >
                {data.D}&nbsp;
                {data.LN}
              </List.Cell>
            </List.Cell>
            {/* Comments */}
            <List.Cell className={"border-r flex flex-col"}>
              <List.Cell className={"grow w-full h-[35px] px-1"}>
                Yorumlar
              </List.Cell>
              <List.Cell className={"grow w-full border-t h-[15px] px-1"}>
                Yorumlar
              </List.Cell>
            </List.Cell>
            {/* Match Score */}
            <>
              <List.Cell className={"border-r flex flex-col min-w-[70px]"}>
                <List.Cell className={"grow w-full h-[35px] px-1"}>
                  {data.OCG[1].MBS}
                </List.Cell>
                <List.Cell
                  className={"grow w-full border-t h-[15px] px-1"}
                ></List.Cell>
              </List.Cell>
              {/* 1 */}
              <ActiveCell
                data={data}
                handleClick={handleClick}
                C={data.C}
                OCG={1}
                OC={0}
                O={data.OCG[1].OC[0].O}
                label={"1"}
              />
              {/* X */}
              <ActiveCell
                data={data}
                handleClick={handleClick}
                C={data.C}
                OCG={1}
                OC={1}
                O={data.OCG[1].OC[1].O}
                label={"X"}
              />
              {/* 2 */}
              <ActiveCell
                data={data}
                handleClick={handleClick}
                C={data.C}
                OCG={1}
                OC={2}
                O={data.OCG[1].OC[2]?.O || ""}
                label={"2"}
              />
            </>
            {/* Down & Up */}
            <>
              {/* Down */}
              <ActiveCell
                data={data}
                handleClick={handleClick}
                C={data.C}
                OCG={5}
                OC={25}
                O={data.OCG[5].OC[25]?.O}
                label={data.OCG[5].OC[25]?.N || "Alt"}
              />
              {/* Up */}
              <ActiveCell
                data={data}
                handleClick={handleClick}
                C={data.C}
                OCG={5}
                OC={26}
                O={data.OCG[5].OC[26]?.O}
                label={data.OCG[5].OC[26]?.N || "Üst"}
              />
            </>
            {/* Empty Fields */}
            <>
              <List.Cell className={"border-r flex flex-col min-w-[70px]"}>
                <List.Cell className={"grow w-full h-[35px] px-1"}></List.Cell>
                <List.Cell className={"grow w-full border-t h-[15px] px-1"}>
                  H1
                </List.Cell>
              </List.Cell>
              <List.Cell className={"border-r flex flex-col min-w-[70px]"}>
                <List.Cell className={"grow w-full h-[35px] px-1"}></List.Cell>
                <List.Cell className={"grow w-full border-t h-[15px] px-1"}>
                  1
                </List.Cell>
              </List.Cell>
              <List.Cell className={"border-r flex flex-col min-w-[70px]"}>
                <List.Cell className={"grow w-full h-[35px] px-1"}></List.Cell>
                <List.Cell className={"grow w-full border-t h-[15px] px-1"}>
                  x
                </List.Cell>
              </List.Cell>
              <List.Cell className={"border-r flex flex-col min-w-[70px]"}>
                <List.Cell className={"grow w-full h-[35px] px-1"}></List.Cell>
                <List.Cell className={"grow w-full border-t h-[15px] px-1"}>
                  2
                </List.Cell>
              </List.Cell>
              <List.Cell className={"border-r flex flex-col min-w-[70px]"}>
                <List.Cell className={"grow w-full h-[35px] px-1"}></List.Cell>
                <List.Cell className={"grow w-full border-t h-[15px] px-1"}>
                  H2
                </List.Cell>
              </List.Cell>
            </>
            {/* Double Chance */}
            <>
              {/* Down */}
              <ActiveCell
                data={data}
                handleClick={handleClick}
                C={data.C}
                OCG={2}
                OC={3}
                O={data.OCG[2]?.OC[3]?.O}
                label={data.OCG[2]?.OC[3]?.N || "1-X"}
              />
              {/* Up */}
              <ActiveCell
                data={data}
                handleClick={handleClick}
                C={data.C}
                OCG={2}
                OC={4}
                O={data.OCG[2]?.OC[4]?.O}
                label={data.OCG[2]?.OC[4]?.N || "1-2"}
              />
              <ActiveCell
                data={data}
                handleClick={handleClick}
                C={data.C}
                OCG={2}
                OC={5}
                O={data.OCG[2]?.OC[5]?.O}
                label={data.OCG[2]?.OC[5]?.N || "X-2"}
              />
            </>
          </>
        )}
      </List.ListItem>
    </List>
  );
};

const ActiveCell = ({ data, handleClick, C, OCG, OC, O, label }) => {
  const { basketItem, setBasketItem } = useContext(AppContext);
  const uniqueId = `${data.NID}-${data.C}-${OCG}-${OC}`;
  return (
    <List.Cell className={`border-r flex flex-col min-w-[70px] `}>
      <List.Cell
        onClick={() =>
          handleClick({
            data,
            C,
            OCG,
            OC,
            O,
            id: uniqueId,
            label,
          })
        }
        className={`grow w-full cursor-pointer h-[35px] px-1 ${
          basketItem.some((item) => item.id === uniqueId) && `bg-yellow-200`
        }`}
      >
        {O}
      </List.Cell>
      <List.Cell className={"grow w-full border-t h-[15px] px-1"}>
        {label || ""}
      </List.Cell>
    </List.Cell>
  );
};

export default BetList;
