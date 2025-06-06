import axios from 'axios';
import { expect, test } from 'vitest';
import { API_BASE } from './authHandlers';

test('should register with a valid email', async () => {
  const name = 'Alice';
  const email = 'alice@gmail.com';
  const payload = { name, email, password: 'abcdef' };
  const response = await axios.post(`${API_BASE}/register`, payload);

  expect(response.status).toBe(200);
  expect(response.data).toEqual({
    token: 'fake-jwt-token',
    user: { id: 'u123', name, email },
  });
});

test('should give error while trying to register without name', async () => {
  const payload = { name: '', email: 'test@gmail.com', password: '123456' };
  await expect(axios.post(`${API_BASE}/register`, payload)).rejects.toMatchObject({
    response: { status: 400, data: { error: 'Missing name' } },
  });
});

test('should give error while trying to register without email', async () => {
  const payload = { name: 'Bob', email: '', password: '123456' };
  await expect(axios.post(`${API_BASE}/register`, payload)).rejects.toMatchObject({
    response: { status: 400, data: { error: 'Missing email' } },
  });
});

test('should give error while trying to register without password', async () => {
  const payload = { name: 'Bob', email: 'test@gmail.com', password: '' };
  await expect(axios.post(`${API_BASE}/register`, payload)).rejects.toMatchObject({
    response: { status: 400, data: { error: 'Missing password' } },
  });
});

test('should give error while trying to register with a short password', async () => {
  const payload = { name: 'Bob', email: 'test@gmail.com', password: '1' };
  await expect(axios.post(`${API_BASE}/register`, payload)).rejects.toMatchObject({
    response: { status: 400, data: { error: 'Password is too short' } },
  });
});

test('should give error while trying to register with an invalid email', async () => {
  const payload = { name: 'Bob', email: 'invalid', password: '123456' };
  await expect(axios.post(`${API_BASE}/register`, payload)).rejects.toMatchObject({
    response: { status: 400, data: { error: 'Email is not valid' } },
  });
});

test('should give error while trying to register with an existing email', async () => {
  const payload = { name: 'Bob', email: 'existing@gmail.com', password: '123456' };
  await expect(axios.post(`${API_BASE}/register`, payload)).rejects.toMatchObject({
    response: { status: 400, data: { error: 'Invalid credentials' } },
  });
});
