import React, { useState } from 'react';
import banner from '../img/Banner.png';
import ToStart from '../img/Tostart2.png';
import Logo from '../img/logo.png';
import mobileBanner from '../img/mobileBanner1.png';
import facebook from '../img/facebook.png';
import teligram from '../img/teligram.png';
import instagram from '../img/instagram.png';
import twiter from '../img/twiter.png';
import playStore from '../img/playstore.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';
import { Link } from 'react-router-dom';

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
                    <nav className="navbar navbar-expand-lg navbar-light bg-black mx-5" style={{ backgroundColor: "black", height: "80px" }}>
                        <img src={Logo} alt="Description of the image" style={{ height: "70%" }} />
                        {/* <a class="navbar-brand text-white" href="#">Navbar</a> */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item active px-5">
                                    <a className="nav-link text-white" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-itemm px-5">
                                    <a className="nav-link text-white" href="#">AboutUs</a>
                                </li>
                                <li className="nav-item px-5">
                                    <a className="nav-link text-white" href="#">Features</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <button className="btn my-2 my-sm-0 text-white" style={{ backgroundColor: "#8546BD", borderRadius: '38px' }} type="submit">Download Now</button>
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
                                    <button className="btn my-2 my-sm-0 text-white mx-2" style={{ backgroundColor: "#8546BD", borderRadius: '38px', marginTop: "10%" }} type="submit">Get Link</button>
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
                    {/* <div className='mx-auto' style={{ paddingLeft: "48%", paddingTop: "82%" }}>
                        <img src={playStore} alt="Description of the image" style={{ height: "50px", textAlign: "center" }} />
                    </div> */}
                </div>
                <div className='mb-5' style={{ justifyContent: 'center' }}>
                    <div className='mx-auto' style={{ width: "60%" }}>
                        <div style={{ textAlign: "center" }}>
                            <h1>FAQ<span style={{ color: "#8546BD" }}>s</span></h1>
                        </div>
                        <div class="accordion" id="accordionExample">
                            <div class="card mt-4">
                                <div class="card-header collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    <span class="title">What is Fantasy Sports? </span>
                                    <span class="accicon"><i class="fas fa-angle-down rotate-icon"></i></span>
                                </div>
                                <div id="collapseOne" class="collapse" data-parent="#accordionExample">
                                    <div class="card-body">
                                        Fantasy sports is a strategy-based online sports game where you can create a virtual team of real players, playing in live matches worldwide. You earn points and win cash prizes based on the performances of these players in actual matches.
                                    </div>
                                </div>
                            </div>
                            <div class="card mt-3">
                                <div class="card-header collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <span class="title">Is it safe to add money to Funzy11?</span>
                                    <span class="accicon"><i class="fas fa-angle-down rotate-icon"></i></span>
                                </div>
                                <div id="collapseTwo" class="collapse" data-parent="#accordionExample">
                                    <div class="card-body">
                                        Adding money to your Funzy11 account is both simple and safe. We have many different payment options enabled on Funzy11 to ensure that your personal details are safe with us.
                                        What's more? After you verify your personal details, you can withdraw the money that you win on Funzy11 directly to your bank account
                                    </div>
                                </div>
                            </div>
                            <div class="card mt-3">
                                <div class="card-header collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false">
                                    <span class="title"> How are Funzy11 points calculated?</span>
                                    <span class="accicon"><i class="fas fa-angle-down rotate-icon"></i></span>
                                </div>
                                <div id="collapseThree" class="collapse" data-parent="#accordionExample">
                                    <div class="card-body">
                                        Funzy11 points system is calculated on the basis of the performance of the player in an actual match. Check Funzy11 Fantasy Points System for various sports.
                                    </div>
                                </div>
                            </div>
                            <div class="card mt-3">
                                <div class="card-header collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false">
                                    <span class="title">When do I get my winnings?</span>
                                    <span class="accicon"><i class="fas fa-angle-down rotate-icon"></i></span>
                                </div>
                                <div id="collapseFour" class="collapse" data-parent="#accordionExample">
                                    <div class="card-body">
                                        A successfully processed withdrawal request via IMPS should get credited almost instantly or within 3 working days. NEFT should get credited within 3 working days
                                        for more details, see this question posted on our helpdesk.
                                    </div>
                                </div>
                            </div>
                            <div class="card mt-3">
                                <div class="card-header collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false">
                                    <span class="title">How do I use the Funzy11 discount coupon code?</span>
                                    <span class="accicon"><i class="fas fa-angle-down rotate-icon"></i></span>
                                </div>
                                <div id="collapseFive" class="collapse" data-parent="#accordionExample">
                                    <div class="card-body">
                                        Go to ‘Rewards’ at the bottom right corner
                                        Click on ‘My Rewards’ and tap on ‘Have a discount coupon code?’
                                        Enter your code, tap ‘Apply now'
                                        Enter any contest and enjoy your discount
                                    </div>
                                </div>
                            </div>
                            <div class="card mt-3">
                                <div class="card-header collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false">
                                    <span class="title">How should I download the Funzy11 app?</span>
                                    <span class="accicon"><i class="fas fa-angle-down rotate-icon"></i></span>
                                </div>
                                <div id="collapseSix" class="collapse" data-parent="#accordionExample">
                                    <div class="card-body">
                                        There are 3 ways in which you can download the Funzy11 app.
                                        Head to www.funzy11.com on your desktop or mobile browser and enter your mobile number to get the download link
                                        If you're an iOS user, you can also search for ‘Funzy11’ in the App Store and download the app
                                        If you are an android user, you can also search for the ‘Funzy11’ on the Play Store and download the app
                                    </div>
                                </div>
                            </div>
                            <div class="card mt-3">
                                <div class="card-header collapsed" data-toggle="collapse" data-target="#collapseSaven" aria-expanded="false">
                                    <span class="title">What type of contests can I join?</span>
                                    <span class="accicon"><i class="fas fa-angle-down rotate-icon"></i></span>
                                </div>
                                <div id="collapseSaven" class="collapse" data-parent="#accordionExample">
                                    <div class="card-body">
                                        Select your favourite sport, click on a match from that sport, create your Funzy11 and join any public, private, head-to-head or mega contests.
                                        You can also choose to join paid contests by paying the contest entry amount or hone your skills by entering practice contests before you compete with others.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "black", height: '150px' }}>
                    <div className='container'>
                        <div className='row pt-5'>
                            <div className='col-3'>
                                <img src={Logo} alt="Description of the image" style={{ height: "2%" }} />
                                <p className='text-white' style={{ fontSize: "12px" }}>Fantasy gaming experience to all.</p>
                            </div>
                            <div className='col-6'>
                                <div className='mx-auto' style={{ display: "flex" }}>
                                    <h6 className='text-white pr-5 '>Home</h6>
                                    <h6 className='text-white pr-5 pl-2'>About Us</h6>
                                    <h6 className='text-white pr-5 pl-2'>Features</h6>
                                    <h6 className='text-white pl-2'>Contact</h6>
                                </div>
                                <div className='mx-auto mt-3' style={{ display: "flex" }}>
                                    <Link to="https://www.facebook.com/profile.php?id=61555697623765"><img className='text-white pr-5 pl-1' src={facebook} alt="Description of the image" style={{ height: "30px" }} /></Link>
                                    <Link to="https://t.me/funzy11"><img className='text-white pr-5 pl-4' src={teligram} alt="Description of the image" style={{ height: "30px" }} /></Link>
                                    <Link to="https://www.instagram.com/funzzy11/"><img className='text-white pr-5 pl-5' src={instagram} alt="Description of the image" style={{ height: "30px" }} /></Link>
                                    <Link to="https://twitter.com/funzy1111"><img className='text-white pl-5' src={twiter} alt="Description of the image" style={{ height: "30px" }} /></Link>
                                </div>
                            </div>
                            <div className='col-3'>
                                <p className='text-white' style={{ fontSize: "12px" }}>+91 9740812670</p>
                                <p className='text-white' style={{ fontSize: "12px" }}>funzzy11@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "black" }}>
                    <hr className='horizantal_line mb-4' />
                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0px 15% 0px 4%" }}>
                        <div>
                            <p className='text-white  mt-3' style={{ fontSize: "12px" }}>© 2024 Funzy11. All right reserved.</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p className='text-white mt-3' style={{ fontSize: "12px" }}>Privacy Policy   </p>
                            <p className='text-white mt-3 pl-5' style={{ fontSize: "12px" }}>    terms and conditions</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobileView'>
                <div className='img-fluid mobile_banner'
                    style={{
                        backgroundImage: `url(${mobileBanner})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: "390vh"
                        // width: '100vh',
                    }}
                >
                    <div style={{ marginLeft: "32%", paddingTop: "130%" }}>
                        <button className="btn text-white" style={{ backgroundColor: "#8546BD", borderRadius: '38px' }}>Download Now</button>
                    </div>
                    {/* <div className='mx-auto play_store' style={{ paddingLeft: "30%"}}>
                        <img src={playStore} alt="Description of the image" style={{ height: "50px", textAlign: "center" }} />
                    </div> */}
                </div>
                <div className='mb-5' style={{ justifyContent: 'center' }}>
                    <div className='mx-auto' style={{ width: "90%" }}>
                        <div style={{ textAlign: "center" }}>
                            <h1>FAQ<span style={{ color: "#8546BD" }}>s</span></h1>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="card mt-4">
                                <div className="card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <span className="title">What is Fantasy Sports? </span>
                                    <span className="accicon"><i class="fas fa-angle-down rotate-icon"></i></span>
                                </div>
                                <div id="collapseOne" class="collapse" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Fantasy sports is a strategy-based online sports game where you can create a virtual team of real players, playing in live matches worldwide. You earn points and win cash prizes based on the performances of these players in actual matches.
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <div className="card-header collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <span className="title">Is it safe to add money to Funzy11?</span>
                                    <span className="accicon"><i class="fas fa-angle-down rotate-icon"></i></span>
                                </div>
                                <div id="collapseTwo" class="collapse" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Adding money to your Funzy11 account is both simple and safe. We have many different payment options enabled on Funzy11 to ensure that your personal details are safe with us.
                                        What's more? After you verify your personal details, you can withdraw the money that you win on Funzy11 directly to your bank account
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <div className="card-header collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false">
                                    <span className="title"> How are Funzy11 points calculated?</span>
                                    <span className="accicon"><i class="fas fa-angle-down rotate-icon"></i></span>
                                </div>
                                <div id="collapseThree" class="collapse" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Funzy11 points system is calculated on the basis of the performance of the player in an actual match. Check Funzy11 Fantasy Points System for various sports.
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <div className="card-header collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false">
                                    <span className="title">When do I get my winnings?</span>
                                    <span className="accicon"><i class="fas fa-angle-down rotate-icon"></i></span>
                                </div>
                                <div id="collapseFour" class="collapse" data-parent="#accordionExample">
                                    <div className="card-body">
                                        A successfully processed withdrawal request via IMPS should get credited almost instantly or within 3 working days. NEFT should get credited within 3 working days
                                        for more details, see this question posted on our helpdesk.
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <div className="card-header collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false">
                                    <span className="title">How do I use the Funzy11 discount coupon code?</span>
                                    <span className="accicon"><i class="fas fa-angle-down rotate-icon"></i></span>
                                </div>
                                <div id="collapseFive" class="collapse" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Go to ‘Rewards’ at the bottom right corner
                                        Click on ‘My Rewards’ and tap on ‘Have a discount coupon code?’
                                        Enter your code, tap ‘Apply now'
                                        Enter any contest and enjoy your discount
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <div className="card-header collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false">
                                    <span className="title">How should I download the Funzy11 app?</span>
                                    <span className="accicon"><i class="fas fa-angle-down rotate-icon"></i></span>
                                </div>
                                <div id="collapseSix" class="collapse" data-parent="#accordionExample">
                                    <div className="card-body">
                                        There are 3 ways in which you can download the Funzy11 app.
                                        Head to www.funzy11.com on your desktop or mobile browser and enter your mobile number to get the download link
                                        If you're an iOS user, you can also search for ‘Funzy11’ in the App Store and download the app
                                        If you are an android user, you can also search for the ‘Funzy11’ on the Play Store and download the app
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <div className="card-header collapsed" data-toggle="collapse" data-target="#collapseSaven" aria-expanded="false">
                                    <span className="title">What type of contests can I join?</span>
                                    <span className="accicon"><i class="fas fa-angle-down rotate-icon"></i></span>
                                </div>
                                <div id="collapseSaven" class="collapse" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Select your favourite sport, click on a match from that sport, create your Funzy11 and join any public, private, head-to-head or mega contests.
                                        You can also choose to join paid contests by paying the contest entry amount or hone your skills by entering practice contests before you compete with others.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "black", justifyContent: "center", textAlign: "center" }}>
                    <img src={Logo} alt="Description of the image" className='mt-4' style={{ height: "60px" }} />
                    <p style={{ fontSize: "12px", color: "white" }} className='mt-2'>Fantasy gaming experience to all.</p>
                    <div className='mt-4' style={{ display: "flex", justifyContent: "space-between", margin: "0px 15%" }}>
                        <Link to="https://www.facebook.com/profile.php?id=61555697623765"><img src={facebook} alt="Description of the image" style={{ height: "30px" }} /></Link>
                        <Link to="https://t.me/funzy11"><img src={teligram} alt="Description of the image" style={{ height: "30px" }} /></Link>
                        <Link to="https://www.instagram.com/funzzy11/"><img src={instagram} alt="Description of the image" style={{ height: "30px" }} /></Link>
                        <Link to="https://twitter.com/funzy1111"><img src={twiter} alt="Description of the image" style={{ height: "30px" }} /></Link>

                    </div>
                </div>
                <div className='pt-4' style={{ backgroundColor: "black", textAlign: "center" }}>
                    <hr className='horizantal_line_mobile' />
                    <h6 className='text-white mt-4'>Home</h6>
                    <h6 className='text-white'>About Us</h6>
                    <h6 className='text-white'>Features</h6>
                    <h6 className='text-white'>Contact</h6>
                    <p className='text-white  mt-3' style={{ fontSize: "12px" }}>© 2024 Funzy11. All right reserved.</p>
                    <hr className='horizantal_line_mobile mb-4' />
                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0px 8%" }}>
                        <p className='text-white mt-3' style={{ fontSize: "12px" }}>Privacy Policy</p>
                        <p className='text-white mt-3' style={{ fontSize: "12px" }}>terms and conditions</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage

