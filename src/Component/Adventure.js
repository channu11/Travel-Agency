import React from 'react'
import FtrData from '../Data/FtrData'


function Adventure() {
    return (
        <>

            <section className='bg5 '>
                <div className='container '>
                    <div className='dist text-center '>
                        <div class="opacity-25">
                            <p className='fs-3 pppp text-light'>POULAR  PACKAGES 2019</p>
                        </div>
                        <h2 className='dest '>Most Popular Adventure Packagesn</h2>
                        <p className='fs-4 text-light pp1 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere tempor mauris, nec
                            imperdiet mi rutrum eget. Donec quis ligula in tellus dictum consequat.</p>

                    </div>

                    <div className='row '>
                        {FtrData.map((a) => (
                            <div className='col-lg-3  dd'>
                                <div className='card mb-5'>
                                    <img className='img2' src={a.image} />
                                    <div className='card-body brdbdy '>
                                        <p className=' fs-6 text-secondary bbb'> {a.visit}</p>
                                          <h4 className='fw-bold nn'>{a.title}</h4>
                                          <button type="button" class="btn btn-success btn5">Know More </button>

                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Adventure
