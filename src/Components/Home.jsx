import React from 'react'
import { Link } from 'react-router-dom'
import Common from './Common'

const Home = () => {
    return (
        <>
            <Common name="Grow up Your Business with" imgsrc="/Images/logos.jpeg" visit="/service" btname="Get Started" />

            <footer class="container my-5 ">
                <p class="float-end"><a href="#">Back to top</a></p>
                <p>© 2023–2025 S-coder, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
            </footer>
        </>
    )
}

export default Home
