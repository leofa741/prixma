import React from 'react'
import { Header } from '../ecomerce/Header'
import './customers.css'

export const CustomersComponent = () => {
  return (
   <>
   <Header
    title='Nuestros Clientes'
    descripcion='Nuestros clientes son nuestra mejor carta de presentación'
    />
   
   <div className="slider">
			<ul>
				<li>
  <img src="https://github.com/leofa741/prixma/blob/master/src/assets/img/coustomer-mg.png?raw=true" alt=""/>

 </li>
 
				<li>
  <img src="http://youghaltennisclub.ie/wp-content/uploads/2014/06/Tennis-Wallpaper-High-Definition-700x300.jpg" alt=""/>
</li>
				<li>
  <img src="http://welltechnically.com/wp-content/uploads/2013/08/android-wallpapers-700x300.jpg" alt=""/>
</li>
				<li>
  <img src="http://welltechnically.com/wp-content/uploads/2013/09/android-widescreen-wallpaper-14165-hd-wallpapers-700x300.jpg" alt=""/>
</li>
			</ul>




          




		</div>
        
   
   </>
  )
}
