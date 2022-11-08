import React from 'react'
import { Header } from '../ecomerce/Header'
import { Milestone } from '../milestone/Milestone'
import { TextpenduloComponent } from '../textopendulo/TextpenduloComponent'
import { CarrouselComponent } from './CarrouselComponent'
 



// 2026665219A


export const CustomersComponent = () => {
  return (
   <>
   <Header
    title='Nuestros Clientes'
    descripcion='Nuestros clientes son nuestra mejor carta de presentación'
    />
    <br/>
    <br/>
  <TextpenduloComponent 
  title='En Construcción'
  />
 
    <Milestone
    title='Mantén la innovación cerca'
    descripcion='La innovación es la clave para el éxito de cualquier empresa.
    Mantén la innovación cerca de tu empresa, con el sistema de gestión de inventario de productos de consumo masivo, podrás administrar tu inventario de manera eficiente y segura de forma online.'
    />
        
   
   </>
  )
}
