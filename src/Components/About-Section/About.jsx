import "./About.css"
import { Icon } from '@iconify-icon/react';
import AboutImg01 from "./01.png"
import ImageOne from '../About-Section/Equipment.png'
import AboutImg02 from "../About-Section/01 (1).png"
import ImageTwo from "../About-Section/2-img.png"
import AboutImg03 from "../About-Section/01 (2).png"
import ImageThree from "../About-Section/Equipment (1).png"
const About = () => {
    return (
        <>
            <div className="Bg-color">
                <div className="container position-relative mb-5">
                    <div className="row align-items-center">
                        <div className="text-white col-lg-6">
                            <div className="d-flex pb-3">
                                <hr className="w-25 text-danger border-3 me-2" /> <h4 className="text-warning text-uppercase">GEt Started</h4>
                            </div>
                            <h1 className="display-2 fw-normal">What level of hiker are you?</h1>
                            <p>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help
                                you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker.
                                What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
                            <button type="button" class="btn btn-outline-warning mb-3">Warning<Icon className="btn-group-vertical fs-2" icon="si:arrow-right-duotone" /></button>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid" src={AboutImg01} alt="Image01" />
                        </div>
                    </div>
                    <div className="position-absolute img-one">
                        <img src={ImageOne} alt="Image" />
                    </div>
                </div>
                <div className="container position-relative">
                    <div className="row py-5">
                        <div className="col-lg-6">
                            <img src={AboutImg02} alt="Image" />
                        </div>
                        <div class="col-md-6 d-flex align-items-center">
                            <div className="text-white ">
                                <div className="position-absolute img-two">
                                    <img src={ImageTwo} alt="Image" />
                                </div>
                                <div className="d-flex ">
                                    <hr className="text-danger border-3 w-25 me-2" /> <h4 class="text-warning text-uppercase">Hiking Essentials</h4>
                                </div>
                                <h1 className="display-2 fw-normal">Picking the right <br /> Hiking Gear!</h1>
                                <p>The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
                                    Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes,
                                    which will get heavy and chafe wif they get sweaty or wet.</p>
                                <button type="button" class="btn btn-outline-warning">Warning<Icon className="btn-group-vertical fs-2" icon="si:arrow-right-duotone" /></button></div>
                        </div>
                    </div>
                </div>

                <div className="container position-relative py-5">
                    <div className="row align-items-center">
                        <div className="text-white col-lg-6">
                            <div className="d-flex pb-3">
                                <hr className="w-25 text-danger border-3 me-2" /> <h4 className="text-warning text-uppercase">where you go is the key</h4>
                            </div>
                            <h1 className="display-2 fw-normal">Understand Your <br /> Map & Timing</h1>
                            <p>To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect.
                                I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..</p>
                            <button type="button" class="btn btn-outline-warning mb-3">Warning<Icon className="btn-group-vertical fs-2" icon="si:arrow-right-duotone" /></button>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid" src={AboutImg03} alt="Image03" />
                        </div>
                    </div>
                    <div className="position-absolute img-three">
                        <img src={ImageThree} alt="Image" />
                    </div>
                </div>

            </div>
        </>
    )
};
export default About;