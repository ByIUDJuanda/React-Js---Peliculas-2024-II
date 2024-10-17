import React from 'react'

export default function Modal({ media, handleChange, guardar, clearMedia }) {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Nueva Media</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                <div className="mb-3">
                    <label htmlFor="titulo" className="col-form-label">Título:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="titulo" 
                    name='titulo' 
                    onChange={handleChange} 
                    value={media.titulo} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="sinopsis" className="col-form-label">Sinopsis:</label>
                    <textarea 
                    className="form-control" 
                    id="sinopsis" 
                    name='sinopsis' 
                    onChange={handleChange} 
                    value={media.sinopsis}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="url" className="col-form-label">URL:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="url" 
                    name='url' 
                    onChange={handleChange} 
                    value={media.url} 
                    />
                </div>
                {/* Similar inputs for imagen, anioEstreno, generoId, directorId, productoraId, tipoId */}
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={clearMedia}>Cerrar</button>
                <button onClick={guardar} type="button" className="btn btn-primary">Guardar</button>
            </div>
            </div>
        </div>
        </div>
    )
}
