import React from 'react'

function Contact() {
  return (
    <>
      <section className='bg6 '>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-7'>
                   <p className='fs-4 opacity-25 text-light mt-5'>
                    <i class="bi bi-dash-lg me-2 "></i>RICH OUT NOW</p>
                     <h3 className='plan'>We’re available for 8 hours a day! Contact to require a detailed analysis and assessment of your plan.</h3>
                     <p className='text-light mt-5 lh-lg fs-5'> Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry’s standard dummy text ever since the when an unknown printer took a galley.</p>
                </div>
                <div className='col-lg-5'>
                <i class="bi bi-telephone-inbound call "></i>
                <h4 className='phn'>+99 456 457 000</h4>
                <button type="button" class="btn btn-primary btn6 ">Contact Us <i class="bi bi-arrow-right ms-3 fw-bold "></i></button>
                    </div>
            </div>
        </div>

      </section>

    </>
  )
}

export default Contact
