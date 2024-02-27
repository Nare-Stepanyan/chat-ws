import React, { FC, useEffect } from "react";
import MessageList from "../messages";
import { socketProvider } from "../../providers/socket-provider";
import { useMessaging } from "../../hooks/use-messaging";
import SendMessage from "../send-message";
import { useAppSelector } from "../app/hook";
import { selectUser } from "../../store/user/userSlice";

const Home: FC = () => {
  const [messages] = useMessaging();
  const selector = useAppSelector;
  const user = selector(selectUser);
  console.log(user);

  useEffect(() => {
    socketProvider.connect();
  }, []);

  return (
    <>
      <h2>Let's chat {user?.userName} 🤗</h2>
      <MessageList messages={messages} />
      <SendMessage />
    </>
  );
};

export default Home;
