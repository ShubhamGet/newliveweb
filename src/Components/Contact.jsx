import React from 'react'

const Contact = () => {


    return (
        <>
            <div class="container">
                <h2 className='text-center'>Contact US</h2>
            </div>
            <div>
                <form>
                    <div class="my-3 mx-5">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" placeholder='xyz@gmail.com' id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3 mx-5">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" placeholder='abc@22' id="exampleInputPassword1" />
                    </div>
                    <div class="my-3 mx-5">
                        <label for="exampleInputQuery" class="form-label">Write about ur Query</label>
                        <input type="text" class="form-control" placeholder='.........' id="exampleInputQuery" aria-describedby="emailHelp" />
                        <select name="form-control" id="examplefromControlSelect">
                            <option>Web</option>
                            <option>Teach Stack</option>
                            <option>Technology</option>
                            <option>Networking</option>
                            <option>Others</option>
                        </select>
                    </div>

                    <div class="mb-3 form-check mx-5">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Are You Member </label>
                    </div>
                    <div class="mb-3 form-check mx-5">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Are You a Coder </label>
                    </div>
                    <div class="mb-3 form-check mx-5">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Are You a Professor </label>
                    </div>
                    <div class="mb-3 form-check mx-5">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Are You a Designer </label>
                    </div>
                    <div class="mx-5">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <footer class="container my-5 ">
                <p class="float-end"><a href="#">Back to top</a></p>
                <p>© 2023–2025 S-coder, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
            </footer>
        </>
    )
}

export default Contact
