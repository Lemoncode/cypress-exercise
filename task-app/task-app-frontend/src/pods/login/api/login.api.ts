export type Role = 'admin' | 'standard';

export interface User {
  id: number;
  name: string;
  role: Role;
}

const basURL = 'http://localhost:3000';

export const login = async (
  username: string,
  password: string
): Promise<User | null> => {
  const response = await fetch(`${basURL}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (response.ok) {
    const { user } = await response.json();
    return user;
  } else {
    return null;
  }
};
