import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { createTestQueryClient } from './createTestQueryClient';

export function QueryClientWrapper(props: { children: React.ReactNode }) {
  const client = React.useMemo(() => createTestQueryClient(), []);
  return <QueryClientProvider client={client}>{props.children}</QueryClientProvider>;
}
