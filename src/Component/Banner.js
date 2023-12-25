import React from 'react'
import BData from '../Data/BData'

function Banner() {
  return (
    <>
       <div className='container'>
        <div className='row '>
            {BData.map((a)=>(
                <div className='col-lg-4  dd'>
                <div className='card mb-3 '>
                    <img className='img2' src={a.image}/>
                    <div className='card-body'>
                        <h4 className='fw-bold'>{a.title}</h4>
                        <p className=' fs-6 text-secondary fw-bold' ><i class="bi bi-globe2  "></i> {a.visit}</p>
                         
                        
                         <div className='d-flex justify-content-between mx-2 star'>
                         <p className=' fs-6'>
                         <i class="bi bi-star-fill "></i>
                         <i class="bi bi-star-fill"></i>
                         <i class="bi bi-star-fill"></i>
                         <i class="bi bi-star-fill"></i>
                         <i class="bi bi-star"></i> <p className='fw-bold '>4 reviews</p>
                         </p>
                        
                         <p className='ps-4 fs-6 fw-bold'><i class="bi bi-stopwatch me-1"></i>5 days</p>
                         </div>
                         <p className='fw-bold mx-2 fs-5'>{a.price}</p>
                         <button type="button" class="btn btn-success mx-2">Add to Cart </button>
                        
                    </div>
                </div>
            </div>
            ))}
            
        </div>
    </div>
    </>
  )
}

export default Banner
