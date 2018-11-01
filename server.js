const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use( express.static( __dirname +'/public' ) )

// Express HBS engine
hbs.registerPartials( __dirname + '/views/parciales' );
app.set('view engine', 'hbs');
 


app.get('/', (req, res) => {
    //   res.send('Hola mundo')
    // let salida = {
    //     nombre: 'Camilo',
    //     edad: 20, 
    //     url: req.url
    // }
    res.render('home', {
        nombre: 'joven camilo valencia',
    });
});

app.get('/about', (req, res) => {
        res.render('about');
    });

// app.get('/data', (req, res) => {
//     res.send('Hola data')
// })
 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);    
})