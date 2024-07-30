import {criptomonedasSelect} from './app.js';
import { objBusqueda } from "./app.js";
import {consultarAPI} from './api.js';
import {mostrarAlerta} from "./ui.js";

// Función para llenar el select
export const selectCriptomonedas = (listaCriptos) => {
    listaCriptos.forEach(cripto => {
        const { FullName, Name } = cripto.CoinInfo;
        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        criptomonedasSelect.appendChild(option);
    });
};

// Función para leer el valor de los inputs
export function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value;
}

// Función para manejar el formulario
export function submitFormulario(e) {
    e.preventDefault();

    // Extraer los valores
    const {moneda, criptomoneda} = objBusqueda;

    if(moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    consultarAPI();
}