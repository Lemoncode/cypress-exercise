import * as React from 'react';

export type Role = 'admin' | 'standard';

export interface UserContext {
  id: number;
  username: string;
  role?: Role;
}

const getDefaultUser = () => ({ id: 0, username: '' });

interface Context {
  login: UserContext;
  updateLogin: (user: UserContext) => void;
}

export const SessionContext = React.createContext<Context>({
  login: getDefaultUser(),
  updateLogin: (value) => {
    console.warn(
      'if you are reading this, likely you forgot to add the provider on top of your app'
    );
  },
});

interface Props {
  children: React.ReactNode;
}

export const SessionProvider: React.FunctionComponent<Props> = (props) => {
  const [login, setLogin] = React.useState<UserContext>(getDefaultUser);

  return (
    <SessionContext.Provider value={{ login, updateLogin: setLogin }}>
      {props.children}
    </SessionContext.Provider>
  );
};
