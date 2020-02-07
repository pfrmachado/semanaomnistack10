// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros:
// Query Params: request.query (filtros, orndenação, paginação...) que se passa na URL
// Route Params: request.params (identificar um recurso na alteração ou remoção). ex.: /users/1
// Body: request.body (dados para criação ou alteração de um registro)

const { Router } = require('express');
const axios = require('axios');
const routes = Router();

routes.post('/devs', async (request, response) => {
    const { github_username } = request.body;    
    const api_response = await axios.get(`https://api.github.com/users/${github_username}`);
    console.log(api_response.data);
    return response.json({msg: 'olá mundo.'})
});

module.exports = routes;