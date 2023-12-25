import React from 'react'

function Pictures() {
  return (
    <>
      <div className='container'>

        <div className='dist text-center '>
          <div class="opacity -75">
            <p className='fs-3 pppp '>IMAGE GALLERY</p>
          </div>
          <h2 className='dest  text-dark kk'>Our Recent Snaps</h2>
          <p className='fs-4  pp1 mt-3 text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere tempor mauris, nec
            imperdiet mi rutrum eget. Donec quis ligula in tellus dictum consequat.</p>

        </div>

        <div className='row pt-5'>

          <div className='col-lg-4 pic'>
            <img className='w-100' src={require('../Images/img2.jpg')}/>
            <img className='w-100 mt-2' src={require('../Images/img5.jpg')}/>
            <img className='w-100 mt-2' src={require('../Images/img8.jpg')}/>
          </div>
          <div className='col-lg-4'>
            <img className='w-100' src={require('../Images/img3.jpg')}/>
            <img className='w-100 mt-4' height={405} src={require('../Images/img6.jpg')}/>
          
          </div>
          <div className='col-lg-4'>
            <img className='w-100' src={require('../Images/img4.jpg')}/>
            <img className='w-100 mt-4' height={252} src={require('../Images/img7.jpg')}/>
          
          </div>
        </div>

      </div>

    </>
  )
}

export default Pictures
