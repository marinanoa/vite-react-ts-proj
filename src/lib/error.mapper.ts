import type { AxiosError } from 'axios';
import { REGISTER_FORM_TEXTS as TEXTS } from '../presentation/constants/register.constants';

const RegisterErrorMessages: Record<string, string> = {
  'Missing name': TEXTS.nameRequired,
  'Missing email': TEXTS.emailRequired,
  'Email is not valid': TEXTS.emailValid,
  'Missing password': TEXTS.passwordRequired,
  'Password is too short': TEXTS.passwordValid,
  'Invalid credentials': TEXTS.invalidCredentials,
};

export function parseRegisterError(err: unknown): string {
  if (typeof err === 'object' && err !== null && 'response' in err) {
    const axiosErr = err as AxiosError<{ error: string }>;
    const backendMsg = axiosErr.response?.data.error;
    if (backendMsg && backendMsg in RegisterErrorMessages) {
      return RegisterErrorMessages[backendMsg];
    }

    if (axiosErr.response?.status === 400) {
      return 'Invalid data';
    }

    if (axiosErr.response?.status === 500) {
      return 'Server error, please try again later';
    }
  }
  return 'Unexpected error, please try again later';
}
