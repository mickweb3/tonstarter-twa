import "./App.css";
import TonConnector from "./components/Ton-Connector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Bot, session } from "grammy";
import { conversations, createConversation } from "@grammyjs/conversations";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [initData, setInitData] = useState();
  const [dataUnsafe, setDataUnsafe] = useState();
  useEffect(() => {
    window.Telegram.WebApp.ready();

    const initData = window.Telegram.WebApp.initData || "";
    const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe || {};
    setInitData(initData);
    setDataUnsafe(initDataUnsafe);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Soda x TON</h1>
        {/* <p>InitData: {JSON.stringify(initData, null, 2)}</p>
        <p>DataUnsafe: {JSON.stringify(dataUnsafe, null, 2)}</p> */}

        <TonConnector />
      </div>
    </QueryClientProvider>
  );
}

export default App;
