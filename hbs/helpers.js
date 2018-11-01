const hbs = require('hbs');

// Helpers
hbs.registerHelper('getAnio', () => {
   return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
   let palabras = texto.split(' ');

   for (let i=0; i<palabras.length; i++) {
       var palabra = palabras[i];
       palabras[i] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
   }

   return palabras.join(' ');
});