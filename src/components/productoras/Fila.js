import React from 'react'

export default function Fila({productora, index}) {
    return (
        <tr key={productora._id}>
            <th scope="row">{index + 1}</th>
            <td>{productora.nombre}</td>
            <td>{productora.slogan}</td>
            <td>{productora.descripcion}</td>
            <td>{productora.estado ? 'Activo' : 'Inactivo'}</td>
            <td>{productora.fechaCreacion}</td>
            <td><button type="button" class="btn btn-outline-success">Editar</button></td>
        </tr>
    )
}
