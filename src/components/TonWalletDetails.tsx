import { useTonhubConnect } from "react-ton-x";
import { useQuery } from "@tanstack/react-query";
import { Address, fromNano } from "ton";
import { Card } from "./Card";
import { tc } from "./Ton-Connector";
import { useEffect, useState } from "react";
import axios from "axios";
export function TonWalletDetails() {
  const connect: any = useTonhubConnect();

  // @ts-ignore
  const { isLoading, data } = useQuery(
    ["balance"],
    async () => {
      const b = await tc.getBalance(
        // @ts-ignore
        Address.parse(connect.state?.walletConfig?.address)
      );

      return `${fromNano(b)} TON`;
    },
    // @ts-ignore
    { enabled: !!connect.state?.walletConfig?.address }
  );

  const handleSendAddress = () => {
    //@ts-ignore
    // window.Telegram.WebApp.sendData(connect.state?.walletConfig?.address);
    const result = window.Telegram.WebApp.answerWebAppQuery(
      "address",
      connect.state?.walletConfig?.address
    );
    console.log(result);
  };

  const handleBind = () => {
    const msg = {
      type: "bind_addr",
      data: {
        address: connect.state?.walletConfig?.address,
      },
    };
    window.Telegram.WebApp.sendData(JSON.stringify(msg));
  };

  return (
    <>
      <Card title="Wallet">
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              wordBreak: "break-all",
              textOverflow: "ellipsis",
            }}
          >
            {/* @ts-ignore */}
            TON Address: {connect.state.walletConfig.address}
          </div>
        </div>
        {/* @ts-ignore */}
        {connect.state.walletConfig.address && (
          <div>
            <button
              style={{ marginBottom: "10px" }}
              onClick={() => {
                localStorage.removeItem("connection");
                window.location.reload();
              }}
            >
              Disconnect
            </button>
            <button
              style={{ marginBottom: "10px" }}
              onClick={handleSendAddress}
            >
              Send Address to Bot
            </button>
            <button onClick={handleBind}>Bind address with Telegram</button>
          </div>
        )}
      </Card>
    </>
  );
}
