import React from 'react'

export default function Fila({ media, index }) {
    return (
        <tr key={media._id}>
            <th scope="row">{index + 1}</th>
            <td>{media.titulo}</td>
            <td>{media.sinopsis}</td>
            <td>{media.url}</td>
            <td>{media.anioEstreno}</td>
            <td>{media.generoId}</td>
            <td>{media.directorId}</td>
            <td>{media.productoraId}</td>
            <td>{media.tipoId}</td>
            <td><button type="button" className="btn btn-outline-success">Editar</button></td>
        </tr>
    )
}
