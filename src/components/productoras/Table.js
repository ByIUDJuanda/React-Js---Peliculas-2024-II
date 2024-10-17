import React from 'react'
import Fila from './Fila'

export default function TableProductora({ productoras }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Slogan</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Creado</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    productoras.map((productora, index) => 
                        (
                            <Fila
                            key={productora._id}
                            index={index}
                            productora={productora}
                            />
                        )
                    )
                }
            </tbody>
        </table>
    )
}
