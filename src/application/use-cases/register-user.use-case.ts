import type { AuthRepository } from '../../domain/repositories/AuthRepository';
import type { RegisterRequestDto } from '../dtos/RegisterRequestDto';

export const registerUser = (repo: AuthRepository) => {
  return async (registerRequest: RegisterRequestDto) => {
    return await repo.register(registerRequest);
  };
};
