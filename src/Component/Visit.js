import React from 'react'

import Cdata from '../Data/Cdata'
function Visit() {

  return (
    <>
    <div className='container'>
        <div className='row '>
            {Cdata.map((a)=>(
                <div className='col-lg-4  dd'>
                <div className='card mb-3 '>
                    <img className='img2' src={a.image}/>
                    <div className='card-body'>
                        <h4>{a.title}</h4>
                        <p ><i class="bi bi-globe2  fs-5 text-secondary fw-bold"></i> {a.visit}</p>
                         <hr/>
                         <p className=' fs-5 text-secondary '><i class="bi bi-stopwatch-fill"></i>{a.time}</p>
                         <div className='d-flex mx-2'>
                         <p className='fw-bold text-primary-emphasis fs-4'>{a.price}</p>
                         <button type="button" class="btn  btn2">Book Now</button>
                         </div>
                        
                    </div>
                </div>
            </div>
            ))}
            
        </div>
    </div>
      
    </>
  )
}

export default Visit
