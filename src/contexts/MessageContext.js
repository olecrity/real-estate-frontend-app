import { message } from "antd";
import { createContext, useContext } from "react";

const MessageContext = createContext();

function MessageProvider({ children }) {
  const [messageApi, contextHolder] = message.useMessage();

  const successMessage = (message) => {
    messageApi.open({
      type: "success",
      content: message,
    });
  };
  const errorMessage = (message) => {
    messageApi.open({
      type: "error",
      content: message,
    });
  };
  const warningMessage = (message) => {
    messageApi.open({
      type: "warning",
      content: message,
    });
  };

  return (
    <>
      {contextHolder}
      <MessageContext.Provider
        value={{ successMessage, errorMessage, warningMessage }}
      >
        {children}
      </MessageContext.Provider>
    </>
  );
}

function useMessage() {
  const context = useContext(MessageContext);

  if (context === undefined) {
    throw new Error("MessageContext was used outside of MessageProvider");
  }
  return context;
}

export { MessageProvider, useMessage };
