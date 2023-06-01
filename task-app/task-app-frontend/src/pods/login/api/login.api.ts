export type Role = 'admin' | 'standard';

export interface User {
  id: number;
  name: string;
  role: Role;
  password: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'jai',
    role: 'standard',
    password: 'test',
  },
  {
    id: 2,
    name: 'lau',
    role: 'standard',
    password: 'test',
  },
  {
    id: 99,
    name: 'admin',
    role: 'admin',
    password: 'test',
  },
];

const getUser = (username: string) => users.find((u) => u.name === username);

const isValidLogin = async (
  user: User,
  username: string,
  password: string
): Promise<boolean> => {
  return Promise.resolve(user.name === username && user.password === password);
};

export const login = async (
  username: string,
  password: string
): Promise<Omit<User, 'password'> | null> => {
  const user = getUser(username);
  if (await isValidLogin(user, username, password)) {
    return { id: user.id, name: user.name, role: user.role };
  }
  return null;
};
