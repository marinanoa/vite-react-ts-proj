import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../../application/use-cases/register-user.use-case';
import { authApi } from '../../infrastructure/api/auth-api';

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser(authApi), // pass the repo to the use case
  });
};
