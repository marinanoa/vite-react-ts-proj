import { type ReactNode } from 'react';
import { message } from 'antd';
import { MessageContext } from './message-context';

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const messageApi = message.useMessage();

  return (
    <MessageContext.Provider value={messageApi}>
      {messageApi[1]} {/* 0 is the api, 1 is the context */}
      {children}
    </MessageContext.Provider>
  );
};
