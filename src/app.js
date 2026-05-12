const express = require('express');
const app = express();

app.use(express.json());

app.get('/tarea-ejemplo', (req, res) => {
  const tarea = { id: 1, titulo: 'Instalar Node.js', completada: true };
  res.json(tarea);
});

module.exports = app;
