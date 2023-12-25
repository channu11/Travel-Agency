import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='container ctrr'>
                <div className='row mt-5'>
                    <div className='col-lg-6  '>
                        <img src={require('../Images/logo1.png')} />
                        <p className='nnn'>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</p>
                        <h5 className='fs-5'><i class="bi bi-dash-lg"></i>SUBSCIBE NOW</h5>
                        <p className='rrr'>Receive News and Offers</p>
                        <form className="d-flex ss" role="search">
                            <input className="form-control" type="search" placeholder="your email address" aria-label="Search" />
                            <button className="btn btn-outline-success btn8 " type="submit">Susbcribe</button>
                        </form>

                    </div>
                    <div className='col-lg-2 style'>
                        <h4>Destinations
                        </h4>
                        <li> <Link to="#" >Africa</Link></li>
                        <li> <Link to="#" >Oceania</Link></li>
                        <li> <Link to="#" >Portugal</Link></li>
                        <li> <Link to="#" >Switzerland</Link></li>

                    </div>
                    <div className='col-lg-2 style'>
                        <h4>Adventures</h4>
                        <li> <Link to="#" >The Dead Man</Link></li>
                        <li> <Link to="#" >The Cursed</Link></li>
                        <li> <Link to="#" >Rock Climbing</Link></li>
                        <li> <Link to="#" >Laugavegur</Link></li>
                    </div>
                    <div className='col-lg-2 style'>
                    <h4>Information</h4>
                        <li> <Link to="#" >Miles</Link></li>
                        <li> <Link to="#" >About US</Link></li>
                        <li> <Link to="#" >Online Query</Link></li>
                        <li> <Link to="#" >Become Partner</Link></li>
                        <li> <Link to="#" >Terms And Condition</Link></li>
                    </div>
                </div>

                <div className='row kk' >
                    <div className='col-lg-6 style1'>
                    <li> <Link to="#" >Home</Link></li>
                        <li> <Link to="#" > Blog</Link></li>
                        <li> <Link to="#" >Contact</Link></li>
                        <li> <Link to="#" > Destination</Link></li>
                        <li> <Link to="#" >Adventure
                        </Link></li>
                    </div>
                    <div className='col-lg-6 fs-5'>
                  <strong>  Tour Classic Theme </strong>-- Travel Agency WordPress Theme bought to you by <strong>
                  ThemeXpert  </strong>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
