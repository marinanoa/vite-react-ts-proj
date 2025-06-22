import { renderHook } from '@testing-library/react';
import { QueryClientWrapper } from '../../test-utils/QueryClientWrapper';
import { expect, test } from 'vitest';
import { useRegister } from './useRegister';
import { waitFor } from '@testing-library/react';

test('should register a user successfully', async () => {
  const { result } = renderHook(() => useRegister(), {
    wrapper: QueryClientWrapper,
  });

  const name = 'Alice';
  const email = 'alice@gmail.com';

  result.current.mutate({
    name,
    email,
    password: 'password123',
  });

  await waitFor(() => {
    expect(result.current.isSuccess).toBe(true);
  });

  expect(result.current.data).toEqual({
    token: 'fake-jwt-token',
    user: { id: 'u123', name, email },
  });
});
