import { axiosConfig } from "../config/axiosConfig";

const headers = {
    'Content-Type' : 'application/json'
}

const crearGenero = (genero) => {   
    const data = {
        nombre : genero.nombre,
        descripcion : genero.descripcion
    }
    return axiosConfig.post('/generos/', data, {
        headers : headers
    })
}

const obtenerGeneros = () => {
    return axiosConfig.get('/generos/', {
        headers : headers
    })
}

const editarGenerosPorID = (genero, id) => {
    const data = {
        nombre : genero.nombre,
        descripcion : genero.descripcion
    }
    return axiosConfig.put('/generos/'+id, data, {
        headers : headers
    })
}

const obtenerGenerosPorID = (id) => {
    return axiosConfig.get('/generos/'+id, {
        headers : headers
    })
}

export {
    crearGenero,
    obtenerGeneros,
    editarGenerosPorID,
    obtenerGenerosPorID
}