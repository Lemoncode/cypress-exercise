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

export const getUsers = (): Promise<User[]> => (
  new Promise((res) => {
    setTimeout(() => {
      res(users);
    }, 200);
  })
);
