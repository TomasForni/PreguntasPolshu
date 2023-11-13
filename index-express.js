import express from "express";

import Pregunta from "./src/models/Pregunta.js";

import PreguntaService from "./src/services/preguntas-services.js";

import router from "./src/controllers/preguntasController.js";
import cors from "cors";

const app = express();
const port = 5000;

let svcPregunta = new PreguntaService();


app.use(cors());
app.use(express.json());
app.use("/api/preguntas", router);

app.get("/api/preguntas", async (req, res) => {
  try {
    let GetAll = await svcPregunta.getAll();
    res.send(GetAll);
  } catch (error) {
    res.send("error");
  }
});

app.get("/api/preguntas/:id", async (req, res) => {
  try {
    let GetById = await svcPregunta.getById(req.params.id);
    res.send(GetById);
  } catch (error) {
    res.send("error");
  }
});

app.delete("/api/preguntas/:id", async (req, res) => {
  try {
    let deleteById = await svcPregunta.deleteById(req.params.id);
    res.send(deleteById);
  } catch (error) {
    res.send("error");
  }
});

app.post("/api/preguntas", async (req, res) => {
  try {
    console.log(req.body);
    let svc2 = new Pregunta();
    let preguntaNew = new svc2.constructor(
      req.body.Pregunta,
      req.body.Respuesta01,
      req.body.Respuesta02,
      req.body.Respuesta03,
      req.body.Respuesta04,
      req.body.RespuestaCorrecta,
      req.body.FechaCreacion
    );
    let Insert = await svcPregunta.insert(preguntaNew);
    res.send(Insert);
  } catch (error) {
    res.send("error");
  }
});

app.put("/api/preguntas/:id", async (req, res) => {
  try {
    console.log(req.body.Nombre);
    let svc2 = new Pregunta();
    let preguntaNew = new svc2.constructor(
      req.body.Id,
      req.body.Pregunta,
      req.body.Respuesta01,
      req.body.Respuesta02,
      req.body.Respuesta03,
      req.body.Respuesta04,
      req.body.RespuestaCorrecta,
      req.body.FechaCreacion
    );
    let update = await svcPregunta.update(preguntaNew);
    res.send(update);
  } catch (error) {
    res.send("error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
