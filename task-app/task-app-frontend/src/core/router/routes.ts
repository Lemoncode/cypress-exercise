import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  login: string;
  tasks: string;
  taskEdit: string;
  // hotelCollection: string;
  // hotelEdit: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  tasks: '/tasks',
  taskEdit: '/task-edit/:id',
  // hotelEdit: '/hotel-edit/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'taskEdit'> {
  taskEdit: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  taskEdit: (id) => generatePath(switchRoutes.taskEdit, { id }),
};

// interface LinkRoutes extends Omit<SwitchRoutes, 'hotelEdit'> {
//   hotelEdit: NavigationFunction;
// }

// export const linkRoutes: LinkRoutes = {
//   ...switchRoutes,
//   hotelEdit: id => generatePath(switchRoutes.hotelEdit, { id }),
// };
