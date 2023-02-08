import React from 'react'
import Common from './Common';

const About = () => {
    return (
        <>
            <Common name="Welcome to About page beyond" imgsrc="/Images/SD-Advance.png" visit="/contact" btname="Contact Now" />

            <footer class="container my-5 ">
                <p class="float-end"><a href="#">Back to top</a></p>
                <p>© 2023–2025 S-coder, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
            </footer>
        </>
    )
}

export default About;
