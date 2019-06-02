const express = require("express");
const helmet = require("helmet");
const nm = require("node-movie");

const app = express();

app.use(helmet());

app.get("/api/title/:title", async (req, res) => {
  const title = req.params.title;
  if (!title) {
    return res
      .status(400)
      .send({ error: "Movie title is not provided in the request" });
  }

  nm(title, data => {
    res.set("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(data, null, 4));
  });
});

app.get("/api/id/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res
      .status(400)
      .send({ error: "Movie ID is not provided in the request" });
  }

  nm.getByID(id, data => {
    res.set("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(data, null, 4));
  });
});

app.use((req, res, next) =>
  res.status(404).send({ message: `Url ${req.url} not found.` })
);
app.use((err, req, res, next) => res.status(500).send({ error: err }));

module.exports = app;
