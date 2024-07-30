import {obtenerCriptomonedas} from './api.js';
import {submitFormulario, leerValor, selectCriptomonedas} from "./eventListeners.js";

// Declarar los elementos del DOM a usar.
const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

export {criptomonedasSelect, monedaSelect, formulario, resultado}

export const objBusqueda = {
    moneda: '',
    criptomoneda: ''
};

// Llamar a la función cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', async () => {
    const criptomonedas = await obtenerCriptomonedas();
    if (criptomonedas && criptomonedas.length > 0) {
        selectCriptomonedas(criptomonedas);
    } else {
        console.error('No se encontraron datos de criptomonedas.');
    }

    formulario.addEventListener('submit', submitFormulario);
    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});