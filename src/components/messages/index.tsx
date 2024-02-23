// import React, { FC } from "react";
// import { Message } from "../../type";

// type MessageListPropTypes = {
//   messages: Message[];
// };

// const MessageList: FC<MessageListPropTypes> = ({ messages }) => {
//   const formatTime = (dateString: string) => {
//     const date = new Date(dateString);
//     const hour = date.getHours();
//     const minutes = date.getMinutes();
//     return `${hour}:${minutes < 10 ? "0" + minutes : minutes}`;
//   };
//   const sortedMessages = [...messages].sort(
//     (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
//   );
//   return (
//     <div className="chat-container">
//       {sortedMessages.map((message) => (
//         <div key={message.id} className="message-item">
//           <div className="username">{message.userName}: </div>
//           <div className="message-content">{message.message}</div>
//           <div className="message-time">{formatTime(message.date)}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MessageList;
import React, { FC, useEffect, useRef } from "react";
import { Message } from "../../type";

type MessageListPropTypes = {
  messages: Message[];
};

const MessageList: FC<MessageListPropTypes> = ({ messages }) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    return `${hour}:${minutes < 10 ? "0" + minutes : minutes}`;
  };

  const sortedMessages = [...messages].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div ref={chatContainerRef} className="chat-container">
      {sortedMessages.map((message) => (
        <div key={message.id} className="message-item">
          <div className="username">{message.userName}: </div>
          <div className="message-content">🗣️ {message.message}</div>
          <div className="message-time">⏲️ {formatTime(message.date)}</div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
