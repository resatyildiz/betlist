import React from "react";
import MainLayout from "./layouts/MainLayout";
import AppContextProvider from "./providers/AppContextProvider";
import BetList from "./features/BetList";
import Basket from "./features/Basket";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <MainLayout>
          <BetList />
          <Basket />
        </MainLayout>
      </AppContextProvider>
    </QueryClientProvider>
  );
};

export default App;
