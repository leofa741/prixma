import React from 'react'
import './customers.css'
export const CarrouselComponent = () => {
  return (
   <>
 
 <div id="wowslider-container1">
<div className="ws_images"><ul>
		<li><img src="data1/images/hohenschwangau532864.jpg" alt="Lake in Alps" title="Lake in Alps" id="wows1_0"/>Hohenschwangau</li>
		<li><img src="data1/images/landscape1344620.jpg" alt="Iffeldorf Lake" title="Iffeldorf Lake" id="wows1_1"/>Easter Lake</li>
		<li><img src="data1/images/lucerne1359909.jpg" alt="Lake in Switzerland" title="Lake in Switzerland" id="wows1_2"/>Lucerne</li>
		<li><img src="data1/images/rieti106848.jpg" alt="Italian Lake" title="Italian Lake" id="wows1_3"/>Rieti</li>
		<li><img src="data1/images/squantzpond209864.jpg" alt="Autumn Lake" title="Autumn Lake" id="wows1_4"/>Squantz Pond</li>
	</ul></div>
	<div className="ws_bullets"><div>
		<a href="#" title="Lake in Alps"><span><img src="data1/tooltips/hohenschwangau532864.jpg" alt="Lake in Alps"/>1</span></a>
		<a href="#" title="Iffeldorf Lake"><span><img src="data1/tooltips/landscape1344620.jpg" alt="Iffeldorf Lake"/>2</span></a>
		<a href="#" title="Lake in Switzerland"><span><img src="data1/tooltips/lucerne1359909.jpg" alt="Lake in Switzerland"/>3</span></a>
		<a href="#" title="Italian Lake"><span><img src="data1/tooltips/rieti106848.jpg" alt="Italian Lake"/>4</span></a>
		<a href="#" title="Autumn Lake"><span><img src="data1/tooltips/squantzpond209864.jpg" alt="Autumn Lake"/>5</span></a>
	</div></div>
<div className="ws_shadow"></div>
</div>

   </>
  )
}
