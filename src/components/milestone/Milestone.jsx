import React from 'react'
import { FcIdea  } from "@react-icons/all-files/fc/FcIdea ";

export const Milestone = ({title,descripcion}) => {
  return (
<>
<section  id='testimonialsmilestone'>
  <div className=''>

        <div className="container">
            <div className="row text-center justify-content-center gy-4">
                <div className="col-lg-6 col-md-6 ">
                    <div className="">                      
                        <h3>{title}</h3>
                        <p>{descripcion}</p>
                                                 
                    </div>
                 </div>               
            </div>
            </div>
        </div>
</section>
</>
  )
}
