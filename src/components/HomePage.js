import React, { useState } from 'react';
import banner from '../img/Banner.png';
import ToStart from '../img/Tostart2.png';
import Logo from '../img/logo.png';
import mobileBanner from '../img/mobileBanner3.png'
import './style.css';

function HomePage() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };
    return (
        <div>
            <div className='desktopView'>
                <div className='img-fluid'
                    style={{
                        backgroundImage: `url(${banner})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '100vh',
                        width: '100%' // Adjust as needed
                    }}
                >
                    <nav class="navbar navbar-expand-lg navbar-light bg-black" style={{ backgroundColor: "black", height: "80px" }}>
                        <img src={Logo} alt="Description of the image" style={{ height: "70%" }} />
                        {/* <a class="navbar-brand text-white" href="#">Navbar</a> */}
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto">
                                <li class="nav-item active px-5">
                                    <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-itemm px-5">
                                    <a class="nav-link text-white" href="#">AboutUs</a>
                                </li>
                                <li class="nav-item px-5">
                                    <a class="nav-link text-white" href="#">Features</a>
                                </li>
                            </ul>
                            <form class="form-inline my-2 my-lg-0">
                                <button class="btn my-2 my-sm-0 text-white" style={{ backgroundColor: "#8546BD", borderRadius: '38px' }} type="submit">Download Now</button>
                            </form>
                        </div>
                    </nav>
                    <div style={{ marginTop: "42%", width: "55%", marginLeft: "28%" }}>
                        <div className='row'>
                            <div className='col-4'>
                                <h3 style={{ color: "#8546BD" }}>Download Official Funzy App</h3>
                            </div>
                            <div className='col-8' style={{ display: "flex" }}>
                                <div className="phone-input-wrapper">
                                    <span>+91</span>
                                    <div className="divider"></div>
                                    <input
                                        type="text"  // Change type to text for phone numbers
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={phoneNumber}
                                        onChange={handlePhoneNumberChange}
                                        style={{ border: "none" }}
                                    />
                                </div>
                                <div style={{ marginTop: "3%" }}>
                                    <button class="btn my-2 my-sm-0 text-white" style={{ backgroundColor: "#8546BD", borderRadius: '38px', marginTop: "10%" }} type="submit">Download Now</button>
                                </div>


                            </div>
                        </div>
                    </div>
                    {/* Your content goes here */}
                </div>
                <div className='img-fluid'
                    style={{
                        backgroundImage: `url(${ToStart})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '100vh',
                        width: '100%', // Adjust as needed
                    }}
                >
                    {/* Your content goes here */}
                </div>

            </div>
            <div className='mobileView'>
            <div className='img-fluid'
                    style={{
                        backgroundImage: `url(${mobileBanner})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '2750px',
                        width: '100vh',
                        // minWidth:'400%' // Adjust as needed
                    }}
                >
                </div>
            </div>
        </div>

    )
}

export default HomePage

