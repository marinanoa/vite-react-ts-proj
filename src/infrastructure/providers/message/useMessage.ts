import { useContext } from 'react';
import { MessageContext } from './message-context';

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessage must be used within a MessageProvider');
  }

  const [api] = context;
  const getKey = () => Date.now() + Math.random();

  return {
    success: (content: string) => {
      const key = getKey();
      api.success({ content, key, onClick: () => api.destroy(key) });
    },
    error: (content: string) => {
      const key = getKey();
      api.error({ content, key, onClick: () => api.destroy(key) });
    },
    info: (content: string) => {
      const key = getKey();
      api.info({ content, key, onClick: () => api.destroy(key) });
    },
  };
};
