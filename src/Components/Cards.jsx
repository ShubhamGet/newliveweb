import React from 'react'

const Cards = () => {
    return (
        <>
            <div className="conatiner my-4">
                <div className="row featurette d-flex justify-content-center align-items-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1"> <strong>Back-End Developer
                        </strong></h2>
                        <p className="lead">Here, You can learn about front-end develpoer concept with <strong>Project</strong>
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                            height="500" src="/Images/img1.jpg" />
                    </div>
                </div>
            </div>

            <div class="container my-4">
                <div class="row featurette d-flex justify-content-center align-items-center">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading fw-normal lh-1"><strong>Full stack Developer
                        </strong></h2>
                        <p className="lead">Here, You can learn about Back-end develpoer concept with <strong>Project</strong>
                        </p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                            height="500" src="/Images/img2.png" />
                    </div>
                </div>
            </div>
            <div className="conatiner my-4">
                <div className="row featurette d-flex justify-content-center align-items-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1"><strong>Mobile App Developer
                        </strong></h2>
                        <p className="lead">Here, You can learn about Mobile App develpoer concept with <strong>Project</strong>
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                            height="500" src="/Images/img3.jpg" />
                    </div>
                </div>
            </div>

            <div class="container my-4">
                <div class="row featurette d-flex justify-content-center align-items-center">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading fw-normal lh-1"><strong>Front-end Developer
                        </strong></h2>
                        <p className="lead">Here, You can learn about front-end develpoer concept with <strong>Project</strong>
                        </p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                            height="500" src="/Images/img4.jpg" />
                    </div>
                </div>
            </div>
            <footer classNameName="container">
                <p classNameName="float-end"><a href="#">Back to top</a></p>
                <p>© 2023–2025 S-coder, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
            </footer>
        </>
    )
}

export default Cards
