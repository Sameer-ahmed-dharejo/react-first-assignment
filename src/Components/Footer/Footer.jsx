import "./Footer.css"
const Footer = () => {
    return (
        <>

            <footer className="bg-color py-5">
                <div className="container">
                    <div className="row text-center text-md-start bg-color">
                        <div className="col-md-6 mb-4 text-white">
                            <h5 className="fw-bold">MNTN</h5>
                            <h5>Get out there & discover your next <br /> slope, mountain & destination!!</h5>
                            <p className="text-secondary mt-5 pt-5">Copyright 2023 MNTN, Inc. Terms & Privacy</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h5 className="text-warning fw-bold">More on The Blog</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" class="text-light text-decoration-none lh-lg">About MNTN</a></li>
                                <li><a href="#" class="text-light text-decoration-none lh-lg">Contributors & Writers</a></li>
                                <li><a href="#" class="text-light text-decoration-none lh-lg">Write For Us</a></li>
                                <li><a href="#" class="text-light text-decoration-none lh-lg">Contact Us</a></li>
                                <li><a href="#" class="text-light text-decoration-none lh-lg">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 mb-4">
                            <h5 className="text-warning fw-bold">More on MNTN</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" class="text-light text-decoration-none lh-lg">The Team</a></li>
                                <li><a href="#" class="text-light text-decoration-none lh-lg">Jobs</a></li>
                                <li><a href="#" class="text-light text-decoration-none lh-lg">Press</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;