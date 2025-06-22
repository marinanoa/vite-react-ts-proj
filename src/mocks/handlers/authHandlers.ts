import { http, HttpResponse } from 'msw';
import type { RegisterRequestDto } from '../../application/dtos/RegisterRequestDto';

export const API_BASE = 'http://localhost:3100/api/auth';

export const authHandlers = [
  http.post<RegisterRequestDto>(`${API_BASE}/register`, async ({ request }) => {
    const body = (await request.json()) as RegisterRequestDto;
    const { name, email, password } = body;

    if (!name) {
      return HttpResponse.json({ error: 'Missing name' }, { status: 400 });
    }

    if (!email) {
      return HttpResponse.json({ error: 'Missing email' }, { status: 400 });
    }

    if (!password) {
      return HttpResponse.json({ error: 'Missing password' }, { status: 400 });
    }

    if (password.length < 6) {
      return HttpResponse.json({ error: 'Password is too short' }, { status: 400 });
    }

    if (!email.includes('@')) {
      return HttpResponse.json({ error: 'Email is not valid' }, { status: 400 });
    }

    if (email.includes('existing')) {
      return HttpResponse.json({ error: 'Invalid credentials' }, { status: 400 });
    }

    return HttpResponse.json(
      {
        token: 'fake-jwt-token',
        user: { id: 'u123', name, email },
      },
      { status: 200 },
    );
  }),
];
