import React from 'react'

import './header.css'

export const Header = ({title,descripcion}) => {
  return (
    <>

<header>
	<div className="overlay">
<h1  className='titleh1'
 style={{
  color: "white",
  fontFamily: "sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  textAlign: "left",
  textShadow: "2px 2px 4px #000000",
  textTransform: "uppercase",
  
  
  textDecorationColor: "white",
  textDecorationStyle: "solid",
  textDecorationThickness: "15px",
  textUnderlineOffset: "10px",
  textRendering: "optimizeLegibility",
  textOrientation: "upright",
  textOverflow: "clip",
  textIndent: "0px",
  textJustify: "auto",
  textKashida: "auto",
  textKashidaSpace: "0px",
  textAnchor: "start",
  textEmphasis: "none",
  textEmphasisColor: "currentcolor",
  textEmphasisStyle: "none",
  textEmphasisPosition: "over right",              
  textEmphasisCustom: "none",
  textCombineUpright: "none",
  textOrientationVertical: "mixed",


   }}
>{title}</h1>
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
