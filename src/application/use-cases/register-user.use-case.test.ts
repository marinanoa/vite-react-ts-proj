import { test, expect, vi, beforeEach } from 'vitest';
import type { AuthRepository } from '../../domain/repositories/AuthRepository';
import { registerUser } from './register-user.use-case';

let fakeRepo: AuthRepository;

beforeEach(() => {
  fakeRepo = {
    register: vi.fn(),
  };
});

test('should call register and return the result', async () => {
  const name = 'Bob';
  const email = 'bob@gmail.com';
  const fakeResponse = { token: 'fake-jwt-token', user: { id: 'u1', name, email } };
  vi.spyOn(fakeRepo, 'register').mockResolvedValue(fakeResponse);

  const fn = registerUser(fakeRepo);
  const input = { name, email, password: 'secretpassword' };
  const result = await fn(input);

  expect(fakeRepo.register).toHaveBeenCalledOnce();
  expect(fakeRepo.register).toHaveBeenCalledWith(input);
  expect(result).toEqual(fakeResponse);
});

test('should return error if repo returns error', async () => {
  const errorMessage = 'Error';
  const fakeError = new Error(errorMessage);
  vi.spyOn(fakeRepo, 'register').mockRejectedValue(fakeError);

  const fn = registerUser(fakeRepo);
  await expect(fn({ name: 'A', email: 'A@x.com', password: 'secretPassword' })).rejects.toThrow(errorMessage);
});
