import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginScene, TasksScene, TaskEditScene } from 'scenes';
import { switchRoutes } from './routes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.root}
          element={<Navigate replace to={switchRoutes.login} />}
        />
        <Route path={switchRoutes.login} element={<LoginScene />} />
        <Route path={switchRoutes.tasks} element={<TasksScene />} />
        <Route path={switchRoutes.taskEdit} element={<TaskEditScene />} />
      </Routes>
    </HashRouter>
  );
};
