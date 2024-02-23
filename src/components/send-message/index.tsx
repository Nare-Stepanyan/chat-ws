import React, { FC, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useMessaging } from "../../hooks/use-messaging";
import Button from "../button";

const SendMessage: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [_, sendMessage] = useMessaging();
  const handleSendMessage = () => {
    const message = {
      id: uuidv4(),
      userName: "USER",
      message: inputValue,
      date: new Date().toISOString(),
    };
    sendMessage(message);
    setInputValue("");
  };

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="message-input-container">
      <div className="message-input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputValue}
          placeholder="Type your message..."
        />
        <Button label="Send" onClick={handleSendMessage} />
      </div>
    </div>
  );
};

export default SendMessage;
