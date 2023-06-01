import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  login: string;
  tasks: string;
  // hotelCollection: string;
  // hotelEdit: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  tasks: '/tasks',
  // hotelEdit: '/hotel-edit/:id',
};

interface LinkRoutes extends SwitchRoutes {}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
};

// type NavigationFunction = (id: string) => string;

// interface LinkRoutes extends Omit<SwitchRoutes, 'hotelEdit'> {
//   hotelEdit: NavigationFunction;
// }

// export const linkRoutes: LinkRoutes = {
//   ...switchRoutes,
//   hotelEdit: id => generatePath(switchRoutes.hotelEdit, { id }),
// };
