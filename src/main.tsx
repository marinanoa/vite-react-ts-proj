import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import '@ant-design/v5-patch-for-react-19'; // Needed for antd Message
import { MessageProvider } from './infrastructure/providers/message/MessageProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MessageProvider>
      <App />
    </MessageProvider>
  </StrictMode>,
);
