const express = require('express');
const personasRouter = require('./api/personas');

const app = express();

const port = 3000;

app.get("/", function(req, res, next) {
    res.send("App Express")
})

app.get("/a", function(req, res, next) {
    res.send("Otra Ruta")
})
app.get("/b", function(req, res, next) {
    res.send("Otra Ruta más")
})

app.use('/api/personas', personasRouter);

app.listen(port, () => {
    console.log(`Ejecutando servidor en el puerto ${port}`)
})