import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SessionContext } from 'core/session-context';
import { linkRoutes } from 'core/router';
import * as api from './api';
import { LoginComponent } from './login.component';
import { Login } from './login.vm';

interface Props {
  className?: string;
}

export const LoginContainer: React.FunctionComponent<Props> = (props) => {
  const { className } = props;
  const { updateLogin } = React.useContext(SessionContext);
  const navigate = useNavigate();

  const handleLogin = async (login: Login) => {
    const user = await api.login(login.name, login.password);

    if (user) {
      updateLogin({ id: user.id, username: user.name, role: user.role });
      navigate(linkRoutes.tasks);
    } else {
      // TODO: Show snackbar component
      alert(
        'invalid credentials, use admin/test, excercise: display a mui snackbar instead of this alert.'
      );
    }
  };
  return <LoginComponent className={className} onLogin={handleLogin} />;
};
