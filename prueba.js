const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let notas = [
  { id: 1, content: "ir a comer" },
  { id: 2, content: "ir al cine" },
];
/* const app = http.createServer((req, resp) => {
    resp.writeHead(200, {"Content-Type": "application/json"})
    resp.end(JSON.stringify(notas))
}) */

app.get("/", (req, resp, next) => {
  console.log("primero");
  next();
});

app.get("/", (req, resp) => {
  console.log("segundo");
  resp.send("<h1>Hola soy segundo</h1>");
});

app.get("/api/notes", (req, res) => {
  res.send(notas);
});

app.post("/api/notes", (req, res) => {
  const { content, id } = req.body;
  const newNote = { content, id };
  notas = [...notas, newNote];
  res.json(newNotes);
});

app.get("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notas.find((note) => note.id === id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).send({ MediaRecorderErrorEvent: "note not found" });
  }
});

app.delete("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const notas = notas.filter((nota) => nota.id !== id);
  res.status(404).send({ sucess: "note has been deleted" });
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
