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

module.exports = {
  getUserById(id) {
    const [user] = users.filter(u => u.id === id);
    return user;
  },
  getUserByName(name) {
    const [user] = users.filter(u => u.name === name);
    return user;
  },
  login(username, password) {
    const user = this.getUserByName(username);
    return user && user.password === password;
  },
  print() {
    console.log(users);
  },
};
