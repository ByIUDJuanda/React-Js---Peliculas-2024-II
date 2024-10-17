import React, { useEffect, useState } from 'react'
import { crearMedia, obtenerMedias } from '../../services/MediaService'
import Modal from './Modal'
import Table from './Table'
import Loading from './Loading'

export default function GestionMedia() {

  const [medias, setMedias] = useState([])
  const [cargando, setCargando] = useState(false)
  const [media, setMedia] = useState({
    titulo: '',
    sinopsis: '',
    url: '',
    imagen: '',
    anioEstreno: '',
    generoId: '',
    directorId: '',
    productoraId: '',
    tipoId: ''
  })

  useEffect(() => {
    listarMedias()
  }, [])

  const listarMedias = async () => {
    setCargando(true)
    try {
      const { data } = await obtenerMedias()
      setMedias(data)
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }

  const guardar = async () => {
    setCargando(true)
    try {
      await crearMedia(media)
      listarMedias()
      clearMedia()
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }

  const handleChange = (e) => {
    setMedia({
      ...media,
      [e.target.name]: e.target.value
    })
  }

  const clearMedia = () => {
    setMedia({
      titulo: '',
      sinopsis: '',
      url: '',
      imagen: '',
      anioEstreno: '',
      generoId: '',
      directorId: '',
      productoraId: '',
      tipoId: ''
    })
  }

  return (
    <>
      <Modal
        media={media}
        handleChange={handleChange}
        guardar={guardar}
        clearMedia={clearMedia}
      />
      <h3>Medias</h3>
      <button onClick={clearMedia} type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nuevo</button>
      {
        cargando ? (
          <Loading />
        ) : ''
      }

      <Table
        medias={medias}
      />
    </>
  )
}
