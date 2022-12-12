import React from 'react'
import { FormContact } from '../components'
import { Header } from '../components/ecomerce/Header'

export const Contact = () => {
  return (
    <>
     <Header
      title="Contacto"
      descripcion="Contactanos para cualquier consulta"
      />
    <FormContact />
    </>
  )
}
