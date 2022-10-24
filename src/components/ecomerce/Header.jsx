import React from 'react'

import './header.css'

export const Header = ({title,descripcion}) => {
  return (
    <>

<header>
	<div className="overlay">
<h1 >{title}</h1>
<h3 >

</h3>
<p>{descripcion}

    </p>
	<br/>
	
		</div>
</header>

    </>
  )
}
