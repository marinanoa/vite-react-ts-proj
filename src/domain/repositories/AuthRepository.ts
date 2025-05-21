export interface AuthRepository {
  // contract
  register(input: {
    name: string;
    email: string;
    password: string;
  }): Promise<{ token: string; user: { id: string; name: string; email: string } }>;
}
