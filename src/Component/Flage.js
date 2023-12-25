import React from 'react'
import { Link } from 'react-router-dom'
import FData from '../FData'

function Flage() {
    return (
        <>
            <div className='container'>

                <div className='row mt-5'>
                    {FData.map((a) => (
                        <div className='col-lg-3'>

                            <div className='box  '>
                                <div className='img1'>
                                    <img src={a.image} />
                                    <Link to="#"> <p className='fs-6 text-dark pt-1'>{a.title} </p></Link>
                                </div>


                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </>
    )
}

export default Flage
