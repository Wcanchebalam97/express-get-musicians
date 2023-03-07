const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;



//TODO

app.listen(port, () => {
    sequelize.sync();
    console.log(`Server listening at http://localhost:${port}`)
})

app.get('/musicians', async (request, response) => {
    const allMusicians = await Musician.findAll();
    response.status(200).json(allMusicians);
})

app.get('/musicians/:id', async (request, response) => {
    const id = request.params.id;
    const foundMusician = await Musician.findByPk(id);
    response.json(foundMusician);
})