const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const request = require("request")


const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Library API",
        version: '1.0.0',
      },
    },
    apis: ["app.js"],
};
  
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

var cors = require('cors');
app.use(cors());


console.log(swaggerDocs);


/**
 * @swagger
 * /pontos:
 *   get:
 *     description: Get de todos os pontos que seram plotados no mapa
 *     responses:
 *       200:
 *         description: Success
 * 
 */
app.get('/pontos', (req, res) => {
    request("http://images.contelege.com.br/poi.json",
            function(error, response, body){
                if(!error && response.statusCode == 200){
                    res.send(body)
                }
            })
})

app.listen(4000)