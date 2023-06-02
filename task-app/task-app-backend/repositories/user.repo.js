const users = [
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

const _getUserByName = name => users.filter(u => u.name === name);

module.exports = {
  getUserById(id) {
    const [user] = users.filter(u => u.id === id);
    return user;
  },
  getUserByName(name) {
    const [user] = users.filter(u => u.name === name);
    return { id: user.id, name: user.name, role: user.role };
  },
  login(username, password) {
    const [user] = _getUserByName(username);
    return user && user.password === password;
  },
  print() {
    console.log(users);
  },
};
