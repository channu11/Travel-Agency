import React from 'react'
import BannerData from '../Data/BannerData'
function Banner1() {
  return (
    <>
    <section className='ctr1'>
      <div className='container mt-5'>
        <div className='row'>
        {BannerData.map((a)=>(
        <div className='col-lg-6 crd1'>
            <div className='card crd'>
                <div className='card-body cbody'>
            <p className='pt-4 fs-4'>{a.Description}</p>
            <img className='my-3' width={120} src={a.image}/>
            <p className='title'>{a.title}</p>
            </div>
            </div>
        </div>)
)}
        </div>
      </div>
      </section>
    </>
  )
}

export default Banner1
