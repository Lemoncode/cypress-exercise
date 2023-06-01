import { User } from './user.model';

const users: User[] = [
  {
    id: 1,
    name: 'jai',
  },
  {
    id: 2,
    name: 'lau',
  },
];

export const getUsers = (): Promise<User[]> =>
  new Promise((res) => {
    setTimeout(() => {
      res(users);
    }, 200);
  });

export const getUserById = (id: number): Promise<User> =>
  new Promise((res) =>
    setTimeout(() => {
      const [user] = users.filter((u) => u.id === id);
      res(user);
    }, 200)
  );

export const getUserByName = (name: string): Promise<User> =>
  new Promise((res) =>
    setTimeout(() => {
      const [user] = users.filter((u) => u.name === name);
      res(user);
    }, 200)
  );
