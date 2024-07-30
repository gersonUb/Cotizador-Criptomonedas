import {mostrarSpinner, mostrarCotizacionHTML } from "./ui.js";
import { objBusqueda } from "./app.js";

// Función asíncrona para consultar criptomonedas
export const obtenerCriptomonedas = async () => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.Data; // Solo devuelve los datos de criptomonedas
    } catch (error) {
        console.error('Error al consultar las criptomonedas:', error);
    }
};

export function consultarAPI() {
    const {moneda, criptomoneda} = objBusqueda;
    
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    
    mostrarSpinner();
    
    fetch(url)  
        .then(respuesta => respuesta.json())
        .then(cotizacion => {
            mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
        });
    }
    