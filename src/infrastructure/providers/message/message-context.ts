import { createContext } from 'react';
import { message } from 'antd';

export const MessageContext = createContext<ReturnType<typeof message.useMessage> | null>(null);
