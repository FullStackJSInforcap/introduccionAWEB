const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/inicio', function (req, res) {
    console.log('Llegó solicitud');
    res.send('Esta es una segunda respuesta');
});

app.post('/segundaSolicitud', function (req, res) {
    res.sendFile(__dirname + '/public/segundaPagina.html');
});

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000');
});