"use client";
import { useState } from "react";
import { deliverMessage } from "./utils/action";
import { Thread } from "./utils/Thread";
import { MessageI } from "./types/message";

const UseOptimistic = () => {
  const [messages, setMessages] = useState<MessageI[]>([
    {
      text: "Hai Tegal Dev✨",
      sending: false,
      key: 1,
    },
  ]);

  async function sendMessage(formData: FormData) {
    const sentMessage = await deliverMessage(formData.get("message") as string);
    setMessages((prev) => [...prev, 
      { text: sentMessage, sending: false, key: prev.length + 1 }
    ]);
  }

  return <Thread messages={messages} sendMessage={sendMessage} />;
};

export default UseOptimistic;
