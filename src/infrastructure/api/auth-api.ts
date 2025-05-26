import axios from 'axios';
import type { AuthRepository } from '../../domain/repositories/AuthRepository';

const API_URL = 'http://localhost:3100/api/auth'; // todo move

export const authApi: AuthRepository = {
  async register(input) {
    const response = await axios.post(`${API_URL}/register`, input);
    return response.data;
  },
};
