import React from 'react'
import ShopData from '../Data/ShopData'

function Shop() {
  return (
    <>
      <div className='container'>
        <div className='row  '>
          <div className='col-lg-6'><p className='mt-5 fs-4 ms-5'>Showing 1–16 of 23 results</p></div>
          <div className='col-lg-6 d-flex justify-content-end'>
            <select className="form-select w-50 mt-4 ll  " aria-label="Default select example">
              <option selected>
                Default sorting </option>
              <option value={1}>Sort by popularity</option>
              <option value={2}>Sort by average rating</option>
              <option value={3}>Sort by latest</option>
              <option value={4}>Sort by price:low to high</option>
              <option value={5}>Sort by price:high to low</option>

            </select>
          </div>


        </div>




        <div className='row'>

         

          {ShopData.map((a) => (
            <div className='col-lg-4 dd '>
              <div className='card mb-3 '>
                <img className='img2 ' src={a.image} />
                <div className='card-body text-center'>
                  <h4 className='fw-bold fs-3'>{a.title}</h4>
                  <i class="bi bi-star-fill ss1"></i>
                  <i class="bi bi-star-fill ss1"></i>
                  <i class="bi bi-star-fill ss1"></i>
                  <i class="bi bi-star ss1"></i>
                  <i class="bi bi-star ss1"></i>
                  <br />
                  <p className='fw-bold pt-2 fs-5 pound'><i class="bi bi-currency-pound"></i> {a.price}</p>
                  <button type="button" class="btn  btn4 ">Add to cart </button>

                </div>
              </div>
            </div>

          ))}
          

        
        </div>

      </div >
      <hr />
    </>
  )
}

export default Shop
