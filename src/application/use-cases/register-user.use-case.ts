import type { AuthRepository } from '../../domain/repositories/AuthRepository';

export const registerUser = (repo: AuthRepository) => {
  return async (input: { name: string; email: string; password: string }) => {
    return await repo.register(input);
  };
};
