import React from 'react'
import { Link } from 'react-router-dom'

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h1 className='mt-5'>{props.name} <strong className='brand-name'>Singh Partner</strong></h1>
                                    <h2 className='my3'>Our team is huge talented for developing the websites</h2>
                                    <div className='mt-3'>
                                        <Link to={props.visit} className='btn'>{props.btname}</Link>
                                    </div>
                                </div>

                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={props.imgsrc} className="img-fluid animated mt-5" alt='home-img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;
