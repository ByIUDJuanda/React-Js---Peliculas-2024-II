import React from 'react';

export default function Fila({ director, index }) {
    return (
        <tr key={director._id}>
            <th scope="row">{index + 1}</th>
            <td>{director.nombre}</td>
            <td>{director.fechaCreacion}</td>
            <td><button type="button" class="btn btn-outline-success">Editar</button></td>
        </tr>
    );
}
