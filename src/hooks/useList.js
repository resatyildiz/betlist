import React from "react";
import { useQuery } from "@tanstack/react-query";

const useList = () => {
  const query = useQuery({
    queryKey: ["list"],
    queryFn: () => fetch("https://nesine-case-study.onrender.com/bets").then((res) => res.json()),
  });

  return query;
};

export default useList;
