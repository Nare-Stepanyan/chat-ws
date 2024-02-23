import React, { FC, useEffect, useRef, useState } from "react";
import Button from "../button";
import MessageList from "../messages";
import { socketProvider } from "../../providers/socket-provider";
import { useMessaging } from "../../hooks/use-messaging";
import SendMessage from "../send-message";

const Home: FC = () => {
  const [messages] = useMessaging();

  useEffect(() => {
    socketProvider.connect();
  }, []);

  return (
    <>
      <h2>Let's chat {"userName"} 🤗</h2>
      <MessageList messages={messages} />
      <SendMessage />
    </>
  );
};

export default Home;
