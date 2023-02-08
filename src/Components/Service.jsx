import React from 'react'
import Cards from './Cards';
import Sdata from './Sdata'

const Service = () => {
    return (
        <>
            <div className="conatiner my-4">
                <div className="row featurette d-flex justify-content-center align-items-center">
                    <div className="col-md-7">
                        {
                            <Cards />
                        }
                    </div>

                </div>
            </div>

        </>
    )
}

export default Service;
