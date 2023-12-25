import React from 'react'







import BCdata from '../Data/BCdata'
function Destination() {

  return (
    <>
    <div className='container'>
        <div className='row '>
            {BCdata.map((a)=>(
                <div className='col-lg-4  dd'>
                <div className='box5  mb-3 '>
                    <img className='img2  w-100' src={a.image}/>
                    <div className='card-body '>
                        <h4 className='fw-bold fs-3 mt-2 ms-2'>{a.title}</h4>
                        <p ><i class="bi bi-globe2  fs-6 text-secondary fw-bold p-2"></i>{a.dest}<i class="bi bi-globe2  fs-6 text-secondary fw-bold p-2"></i></p>
                         <hr/>

                         <button type="button" class="btn  btn3 ">Book Now |  {a.price}</button>
                     
                        
                    </div>
                </div>
            </div>
            ))}
            
        </div>


    
    </div>


 
      
    </>
  )
}

export default Destination
