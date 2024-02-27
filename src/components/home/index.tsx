import React, { FC, useEffect } from "react";
import MessageList from "../messages";
import { socketProvider } from "../../providers/socket-provider";
import { useMessaging } from "../../hooks/use-messaging";
import SendMessage from "../send-message";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { selectUser, setUser } from "../../store/user/userSlice";
import { useNavigate } from "react-router";

const Home: FC = () => {
  const [messages] = useMessaging();
  const dispatch = useAppDispatch();
  const selector = useAppSelector;
  const user = selector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    socketProvider.connect();
  }, []);
  const handleLogout = () => {
    dispatch(setUser(null));
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <div className="top">
        <h2>Let's chat {user?.userName} 🤗</h2>
        <button className="logout" onClick={handleLogout}>
          Log out
        </button>
      </div>

      <MessageList messages={messages} />
      <SendMessage />
    </>
  );
};

export default Home;
