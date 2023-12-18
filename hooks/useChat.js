import { useEffect, useState } from "react";

import { io } from "socket.io-client";
export const socket = io("https://socket-back.vercel.app/", {
  path: '/socket.io',
  transports: ['websocket'],
  secure: true,
});
export default function useChat() {
  const [message, setMessage] = useState("");
  const [messagesList, setMessagesList] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessagesList([...messagesList, { mine: false, message }]);
    });

    return () => {
      socket.on("disconnect");
    };
  }, [messagesList]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("message", { message });
      setMessagesList([...messagesList, { mine: true, message }]);
    }
  };
  return {
    setMessage,
    message,
    messagesList,
    handleSendMessage,
  };
}
