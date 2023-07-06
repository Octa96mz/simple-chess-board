#!/usr/bin/env node

const { crearTableroAjedrez } = require('../src/index.js');
const numero = process.argv[2];

if (isNaN(numero)) {
    console.error('Error: Debes ingresar un número válido.');
    process.exit(1);
  }

const tablero = crearTableroAjedrez(parseInt(numero, 10));

console.log(tablero);