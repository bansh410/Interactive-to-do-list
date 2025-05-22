const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve frontend

let tasks = [];

app.get('/tasks', (req, res) => res.json(tasks));

app.post('/tasks', (req, res) => {
  tasks.push(req.body);
  res.status(201).json({ message: 'Task added' });
});

app.put('/tasks/:id', (req, res) => {
  tasks[req.params.id] = req.body;
  res.json({ message: 'Task updated' });
});

app.delete('/tasks/:id', (req, res) => {
  tasks.splice(req.params.id, 1);
  res.json({ message: 'Task deleted' });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
