import axios from 'axios';
import { vi, test, expect } from 'vitest';
import { authApi } from './auth-api';
import { API_BASE } from '../../mocks/handlers/authHandlers';

test('should call axios post with the correct url and returns data', async () => {
  const name = 'Bob';
  const email = 'bob@gmail.com';
  const fakeData = { token: 'fake-jwt-token', user: { id: 'u1', name, email } };
  vi.spyOn(axios, 'post').mockResolvedValue({ data: fakeData });

  const input = { name, email, password: 'secretpassword' };
  const result = await authApi.register(input);

  expect(axios.post).toHaveBeenCalledOnce();
  expect(axios.post).toHaveBeenCalledWith(`${API_BASE}/register`, input);
  expect(result).toEqual(fakeData);
});
