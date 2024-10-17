import React from 'react'

export default function Fila({ tipo, index }) {
    return (
        <tr key={tipo._id}>
            <th scope="row">{index + 1}</th>
            <td>{tipo.nombre}</td>
            <td>{tipo.descripcion}</td>
            <td>{tipo.fechaCreacion}</td>
            <td><button type="button" className="btn btn-outline-success">Editar</button></td>
        </tr>
    )
}
