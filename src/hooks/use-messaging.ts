import { useEffect, useState } from "react";
import { socketProvider } from "../providers/socket-provider";
import { MESSAGE_EVENTS_TYPES, MESSAGE_TYPES } from "../constants";
import { Message } from "../type";

export const useMessaging = (): [Message[], (message: Message) => void] => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const newMessageOff = socketProvider.eventEmitter.on(
      MESSAGE_EVENTS_TYPES.ADD_MESSAGE,
      onNewMessage
    );
    const loadMessagesOff = socketProvider.eventEmitter.on(
      MESSAGE_EVENTS_TYPES.UPDATE_MESSAGES,
      onLoadMessages
    );

    return () => {
      newMessageOff();
      loadMessagesOff();
    };
  }, []);

  const onNewMessage = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const onLoadMessages = (messages: Message[]) => {
    setMessages(messages);
  };

  const sendMessage = (message: Message) => {
    socketProvider.sendMessage(MESSAGE_TYPES.NEW_MESSAGE, message);
  };
  return [messages, sendMessage];
};
