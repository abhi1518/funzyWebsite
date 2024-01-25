import React, { useState } from 'react';
import banner from '../img/Banner.png';
import ToStart from '../img/Tostart2.png';
import Logo from '../img/logo.png';
import mobileBanner from '../img/mobileBanner1.png'
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
                        height: '99vh',
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
                        height: '190vh',
                        width: '100%', // Adjust as needed
                    }}
                >
                    {/* Your content goes here */}
                </div>
                <div style={{ justifyContent: 'center' }}>
                    <div className='mx-auto' style={{ width: "60%" }} id="main">
                        <div class="container">
                            <div style={{ textAlign: "center" }}>
                                <h1>FAQ<span style={{color: "#8546BD"}}>s</span></h1>
                            </div>
                            <div class="accordion mt-4 " id="faq">
                                <div class="card ">
                                    <div class="card-header" id="faqhead1">
                                        <a href="#" class="btn btn-header-link collapsed text-black" data-toggle="collapse" data-target="#faq1" aria-expanded="false" aria-controls="faq1">S.S.S</a>
                                    </div>

                                    <div id="faq1" class="collapse" aria-labelledby="faqhead1" data-parent="#faq">
                                        <div class="card-body text-black">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                            moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                            shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                            aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="faqhead2">
                                        <a href="#" class="btn btn-header-link collapsed text-black" data-toggle="collapse" data-target="#faq2"
                                            aria-expanded="true" aria-controls="faq2">S.S.S</a>
                                    </div>

                                    <div id="faq2" class="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                                        <div class="card-body text-black">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                            moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                            shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                            aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="faqhead3">
                                        <a href="#" class="btn btn-header-link collapsed text-black" data-toggle="collapse" data-target="#faq3"
                                            aria-expanded="true" aria-controls="faq3">S.S.S</a>
                                    </div>

                                    <div id="faq3" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                        <div class="card-body text-black">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                            moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                            shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                            aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor:"black"}}>
                    <div className='container'>
                        <div className='row mt-5 mb-4'>
                            <div className='col-3'>

                            </div>
                            <div className='col-6'>
                                <div className='mx-auto' style={{display:"flex"}}>
                                    <h6 className='text-white'>Home</h6>
                                    <h6 className='text-white'>About Us</h6>
                                    <h6 className='text-white'>Features</h6>
                                    <h6 className='text-white'>Contact</h6>
                                </div>
                            </div>
                            <div className='col-3'>

                            </div>
                        </div>

                    </div>
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

                <div id="main">
                    <div class="container">
                        <div class="accordion" id="faq">
                            <div class="card">
                                <div class="card-header" id="faqhead1">
                                    <a href="#" class="btn btn-header-link" data-toggle="collapse" data-target="#faq1" aria-expanded="false" aria-controls="faq1">S.S.S</a>
                                </div>

                                <div id="faq1" class="collapse show" aria-labelledby="faqhead1" data-parent="#faq">
                                    <div class="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="faqhead2">
                                    <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq2"
                                        aria-expanded="true" aria-controls="faq2">S.S.S</a>
                                </div>

                                <div id="faq2" class="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                                    <div class="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="faqhead3">
                                    <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq3"
                                        aria-expanded="true" aria-controls="faq3">S.S.S</a>
                                </div>

                                <div id="faq3" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                    <div class="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default HomePage

