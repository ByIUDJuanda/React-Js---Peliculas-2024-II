import { axiosConfig } from "../config/axiosConfig";

const headers = {
    'Content-Type': 'application/json'
}

const crearMedia = (media) => {
    const data = {
        titulo: media.titulo,
        sinopsis: media.sinopsis,
        url: media.url,
        imagen: media.imagen,
        anioEstreno: media.anioEstreno,
        generoId: media.generoId,
        directorId: media.directorId,
        productoraId: media.productoraId,
        tipoId: media.tipoId
    }
    return axiosConfig.post('/media', data, {
        headers: headers
    })
}

const obtenerMedias = () => {
    return axiosConfig.get('/media', {
        headers: headers
    })
}

const editarMediaPorID = (media, id) => {
    const data = {
        titulo: media.titulo,
        sinopsis: media.sinopsis,
        url: media.url,
        imagen: media.imagen,
        anioEstreno: media.anioEstreno,
        generoId: media.generoId,
        directorId: media.directorId,
        productoraId: media.productoraId,
        tipoId: media.tipoId
    }
    return axiosConfig.put('/media/' + id, data, {
        headers: headers
    })
}

const obtenerMediaPorID = (id) => {
    return axiosConfig.get('/media/' + id, {
        headers: headers
    })
}

export {
    crearMedia,
    obtenerMedias,
    editarMediaPorID,
    obtenerMediaPorID
}
