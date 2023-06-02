const express = require('express');
const cors = require('cors');
const taskRepo = require('./repositories/task.repo');
const userRepo = require('./repositories/user.repo');

const app = express();

app.use(cors());
app.use(express.json());

// TODO: Feed as env variable
const port = 3000;

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const ok = userRepo.login(username, password);
  res.send({ ok });
});

app.get('/api/tasks/:userId/:id', (req, res) => {
  const { id } = req.params;
  const response = taskRepo.getTaskById(+id);
  res.send(response);
});

app.get('/api/tasks/:userId', (req, res) => {
  const { userId } = req.params;
  const tasks = taskRepo.getTasksByUserId(+userId);
  res.send(tasks);
});

/*{ title, description, userId }*/
app.post('/api/tasks', (req, res) => {
  const { title, description, userId } = req.body;
  const { name } = userRepo.getUserById(+userId);
  const task = { title, description, userId, userName: name };
  const tasks = taskRepo.addTask(task);
  res.send(tasks);
});

app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  taskRepo.deleteTask(+id);
  res.send({ ok: true });
});

/*{ title, description }*/
app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const task = { id: +id, title, description };
  taskRepo.updateTask(task);
  res.send({ ok: true });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
