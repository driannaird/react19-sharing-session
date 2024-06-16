import { FC, useOptimistic, useRef } from "react";
import { MessageI } from "../types/message";

interface ThreadPropsI {
  messages: MessageI[];
  sendMessage: (formData: FormData) => Promise<void>;
}

export const Thread: FC<ThreadPropsI> = ({ messages, sendMessage }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage as string,
        sending: true,
        key: state.length ? state[state.length - 1].key + 1 : 0,
      },
    ]
  );

  async function formAction(formData: FormData) {
    addOptimisticMessage(formData.get("message"));
    formRef.current?.reset();
    await sendMessage(formData);
  }

  return (
    <>
      {optimisticMessages.map((messages) => (
        <div key={messages.key} className={`message-thread ${messages.sending ? "bg-yellow-500" : "bg-blue-500"}`}>
          {messages.text}
          {messages.sending && <small>(Sending...)</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef} className="form-action">
        <input type="text" name="message" className="input" placeholder="..." />
        <button type="submit" className="button">Send</button>
      </form>
    </>
  );
};
