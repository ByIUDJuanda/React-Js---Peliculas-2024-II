import React, { useEffect, useState } from 'react'
import { crearProductora, obtenerProductoras } from '../../services/ProductoraService'
import Modal from './Modal'
import Table from './Table'
import Loading from './Loading'

export default function Productoras() {

  const [productoras, setProductoras] = useState([])
  const [cargando, setCargando] = useState(false)
  const [productora, setProductora] = useState({
    nombre: '',
    slogan: '',
    descripcion: ''
  })

  useEffect(() => {
    listarProductoras()
  }, [])

  const listarProductoras = async () => {
    setCargando(true)
    try {
      const { data } = await obtenerProductoras()
      setProductoras(data)
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }

  const guardar = async () => {
    setCargando(true)
    try {
      await crearProductora(productora)
      listarProductoras()
      clearProductora()
      setCargando(false)
    } catch (e) {
      console.log(e)
      setCargando(false)
    }
  }

  const handleChange = (e) => {
    setProductora({
      ...productora,
      [e.target.name] : e.target.value
    })
  }

  const clearProductora = () => {
    setProductora({
      nombre: '',
      slogan: '',
      descripcion: ''
    })
  }

  return (
    <>
      <Modal 
        productora={productora}
        handleChange={handleChange}
        guardar={guardar}
        clearProductora={clearProductora}
      />
      <h3>Productoras</h3>
      <button onClick={clearProductora} type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nueva</button>
      {
        cargando ? (
          <Loading />
        ) : ''
      }

      <Table 
        productoras={productoras}
      />
    </>
  )
}
