import React from 'react';
import facebook from '../img/facebook.png';
import teligram from '../img/teligram.png';
import instagram from '../img/instagram.png';
import twiter from '../img/twiter.png';
import Logo from '../img/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
    return (
        <div>
            <div className='desktopView'>
                <div style={{ backgroundColor: "black" }}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-black mx-5" style={{ backgroundColor: "black", height: "80px" }}>
                        <Link to="/"><img src={Logo} alt="Description of the image" style={{ height: "50px" }} /></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item active px-5">
                                    <a className="nav-link text-white" href="#"><span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-itemm px-5">
                                    <a className="nav-link text-white" href="#"></a>
                                </li>
                                <li className="nav-item px-5">
                                    <a className="nav-link text-white" href="#"></a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <button className="btn my-2 my-sm-0 text-white" style={{ backgroundColor: "#8546BD", borderRadius: '38px' }} type="submit">Download Now</button>
                            </form>
                        </div>
                    </nav>
                </div>
                <div style={{ background: "#efeff4" }}>
                    <div className='container' style={{ backgroundColor: 'white' }}>
                        <p className='pt-4' style={{ fontSize: "16px", fontWeight: "600" }}>PRIVACY POLICY</p>
                        <p style={{ fontSize: "14px" }}>Funzy11 respects the privacy of its Users and is committed to protect it in all respects. With a view to offer an enriching and holistic internet experience to its Users, Funzy11 offers a vast repository of Services. Kindly take time to read the 'About Us' section to know more about Funzy11. Most of the Services are offered for free but you may need registration to participate in the Games. The information about the User is collected by Funzy11 as (i) information supplied by Users and (ii) information automatically tracked during User's navigation on Funzy11.</p>
                        <p style={{ fontSize: "14px" }}>Before you submit any information to the Portal, please read this Privacy Policy for an explanation of how we will treat your information. By using any part of the Portal, you consent to the collection, use, disclosure and transfer of your information for the purposes outlined in this Privacy Policy and to the collection, processing and maintenance of this information. Your use of any part of the Portal indicates your acceptance of this Privacy Policy and of the collection, use and disclosure of your information in accordance with this Privacy Policy. While you have the option not to provide us with certain personal information, withdraw your consent to collect certain information, request temporary suspension of collection of personal information or request deletion of personal information collected, kindly note that in such an event you may not be able to take full advantage of the entire scope of features and services offered to you and we reserve the right not to provide you with our services.</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>1. Consent</p>
                        <p style={{ fontSize: "14px" }}>By using Funzy11 Platform/ our Services and/ or by providing your information, you consent to the collection and use of the information you disclose on Funzy11 Platform in accordance with this Privacy Policy, including but not limited to your consent for collecting, using, sharing and disclosing your information as per this Privacy Policy. If we decide to change our Privacy Policy, the updated changes shall be available on Funzy11 Platform, so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it.</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>2. Purpose and Usage</p>
                        <p>To avail certain Services on the Portal, Users would be required to provide certain information for the registration process, namely:</p>
                        <ol>
                            <li>Username</li>
                            <li>Email address</li>
                            <li>Date of birth</li>
                            <li>State</li>
                            <li>Government ID such as aadhaar card or driving license or voter id or PAN Card</li>
                        </ol>
                        <p>Additionally in the course of providing you with access to the Services, and in order to provide you access to the features offered through the Portal and to verify your identity, secure your account details, you may give us the permission to capture, record your device related information, operating system information, network information, location information etc. You may choose to allow us to gather information in relation to the apps installed on your device in order for us to better our Services and your experience on the Portal. You may also be required to furnish additional information, including your Permanent Account Number.</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>3. Types of information we collect</p>
                        <p style={{ fontSize: "14px" }}>We collect the following types of information from you when you register on the Funzy11 Platform and use our Services: any information that exclusively identifies you for e.g., your name, email address, mobile number, date of birth, display picture, social media account ID (where provided by you), postal address, Permanent Account Number (PAN) and bank account details. In some cases, for options such as virtual private rooms for Contests (as defined in the Terms & Conditions), you may provide us with personal information of another person, for which we assume you have consent from such person to share their information with us. Further, we collect non-personal information, which is information that does not exclusively identify you but is related to you nonetheless such as, information about your interests and demographics.</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>4. Location of personal information</p>
                        <p style={{ fontSize: "14px" }}>The Company is located in India. Depending on the scope of your interactions with our Services/ Funzy11 Platform, your personal information may be stored in or accessed in India. Whenever we transfer personal information to other jurisdictions, we will ensure that the information is transferred in accordance with this Privacy Policy and as permitted by applicable data protection laws.</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>5. Security Procedures:</p>
                        <p style={{ fontSize: "14px" }}>All information gathered on Funzy11 is securely stored within the Funzy11-controlled database. The database is stored on servers secured behind a firewall; access to such servers being password-protected and strictly limited based on need-to-know basis. However, we understand that as effective as our security measures are, no security system is impenetrable. Thus, we cannot guarantee the security of our database, nor can we guarantee that information you supply will not be intercepted while being transmitted to us over the Internet. Further, any information you include in a posting to the discussion areas will be available to anyone with internet access. By using the Portal, you understand and agree that your information may be used in or transferred to countries other than India.</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>6. Third Parties</p>
                        <p style={{ fontSize: "14px" }}>Our Services/ use of Funzy11 Platform may include third party links to other websites and/or applications. Such websites are governed by their respective privacy policies, which are beyond Funzy11 control. Third party advertising partners may collect information about you when you interact with their content, advertising, or services. Funzy11 is not responsible for the privacy practices or the content of such websites.</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>7. Access and choice</p>
                        <p style={{ fontSize: "14px" }}>You can view, update, and delete certain information about you, your account and your interactions with our Services/ Funzy11 Platform. If you cannot access or update your information yourself, you can always contact us for assistance.
                            You have choices about the collection and use of your personal information. Our Services/ Funzy11 Platform include settings that provide you with options as to how your information is being used wherein you can choose not to provide certain information.</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>8. Advertising</p>
                        <p style={{ fontSize: "14px" }}>When Funzy11 presents information to its online advertisers - to help them understand its audience and confirm the value of advertising on the Portal - it is usually in the form of aggregated anonymized data (information that cannot be used to trace a user) of Users that may include statistics and/or data concerning User traffic, User responsiveness and User behaviour to such advertisements on our Portal. When you register with Funzy11, we contact you from time to time about updating your content to provide features which we believe may benefit you.</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>9. Access and choice</p>
                        <p style={{ fontSize: "14px" }}>You can view, update, and delete certain information about you, your account and your interactions with our Services/ Funzy11 Platform. If you cannot access or update your information yourself, you can always contact us for assistance.
                            You have choices about the collection and use of your personal information. Our Services/ Funzy11 Platform include settings that provide you with options as to how your information is being used wherein you can choose not to provide certain information.</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>10.Disclaimer</p>
                        <p style={{ fontSize: "14px" }}>Several deceptive emails, websites, blogs etc. claiming to be from or associated with Funzy11 may or are circulating on the Internet ("Deceptive Communication"). Such Deceptive Communication may include our logo, photos, links, content or other information. Some Deceptive Communication may call the User requesting the User to provide login name, password etc. or inform the User that the User has won a prize/ gift or provide a method to commit an illegal/ unauthorized act or deed or request detailed personal information or a payment of some kind. The sources and contents of these Deceptive Communications and accompanying materials are in no way associated with Funzy11. For your own protection, we strongly recommend not responding to such Deceptive Communication. </p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>12.Applicable Law and Jurisdiction</p>
                        <p style={{ fontSize: "14px" }}>By visiting this Portal, you agree that the laws of the Republic of India without regard to its conflict of laws principles, govern this Privacy Policy and any dispute arising in respect hereof shall be subject to and governed by the dispute resolution process set out in the Terms and Conditions</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>13.Contact Us</p>
                        <p style={{ fontSize: "14px" }}>Any questions or clarifications with respect to this Privacy Policy or any complaints, comments, concerns or feedback can be sent to Funzy11 at funzzy@gmail.com by normal/physical mail addressed to:</p>
                        <p style={{ fontSize: "14px" }}>Attn: Funzy11 Team</p>
                        <p style={{ fontSize: "14px" }}>CyberSonic Technology Private Limited,</p>
                        <p style={{ fontSize: "14px" }}>Outer Ring Rd, Banaswadi,Bengalore 560043</p>
                        <p style={{ fontSize: "14px" }}>India.</p>
                    </div>

                </div>
                <div style={{ backgroundColor: "black", height: '150px' }}>
                    <div className='container'>
                        <div className='row pt-5'>
                            <div className='col-3'>
                                <Link to="/"><img src={Logo} alt="Description of the image" style={{ height: "2%" }} /></Link>
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
                            <div className='col-3' style={{ height: "50px" }}>
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
                        <div style={{ display: "block" }}>
                            <Link to="/privacypolicy" style={{ fontSize: "12px" }} className='text-white mt-3 mx-4'>Privacy Policy</Link>
                            <Link to="/termsandconditions" style={{ fontSize: "12px" }} className='text-white mt-3'>Terms and Conditions</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobileView'>
                <div style={{backgroundColor:"black", height:"100px", position: "fixed", top: 0, width: "100%"}}>
                    <div className='mx-auto text-center'>
                    <Link to="/"><img src={Logo} alt="Description of the image" className='mt-2' style={{ height: "70px" }} /></Link>
                    </div>
                </div>
                <div style={{ background: "#efeff4", marginTop:"100px" }}>
                    <div className='container' style={{ backgroundColor: 'white' }}>
                        <p className='pt-4' style={{ fontSize: "16px", fontWeight: "600" }}>PRIVACY POLICY</p>
                        <p style={{ fontSize: "14px" }}>Funzy11 respects the privacy of its Users and is committed to protect it in all respects. With a view to offer an enriching and holistic internet experience to its Users, Funzy11 offers a vast repository of Services. Kindly take time to read the 'About Us' section to know more about Funzy11. Most of the Services are offered for free but you may need registration to participate in the Games. The information about the User is collected by Funzy11 as (i) information supplied by Users and (ii) information automatically tracked during User's navigation on Funzy11.</p>
                        <p style={{ fontSize: "14px" }}>Before you submit any information to the Portal, please read this Privacy Policy for an explanation of how we will treat your information. By using any part of the Portal, you consent to the collection, use, disclosure and transfer of your information for the purposes outlined in this Privacy Policy and to the collection, processing and maintenance of this information. Your use of any part of the Portal indicates your acceptance of this Privacy Policy and of the collection, use and disclosure of your information in accordance with this Privacy Policy. While you have the option not to provide us with certain personal information, withdraw your consent to collect certain information, request temporary suspension of collection of personal information or request deletion of personal information collected, kindly note that in such an event you may not be able to take full advantage of the entire scope of features and services offered to you and we reserve the right not to provide you with our services.</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>1. Consent</p>
                        <p style={{ fontSize: "14px" }}>By using Funzy11 Platform/ our Services and/ or by providing your information, you consent to the collection and use of the information you disclose on Funzy11 Platform in accordance with this Privacy Policy, including but not limited to your consent for collecting, using, sharing and disclosing your information as per this Privacy Policy. If we decide to change our Privacy Policy, the updated changes shall be available on Funzy11 Platform, so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it.</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>2. Purpose and Usage</p>
                        <p>To avail certain Services on the Portal, Users would be required to provide certain information for the registration process, namely:</p>
                        <ol>
                            <li>Username</li>
                            <li>Email address</li>
                            <li>Date of birth</li>
                            <li>State</li>
                            <li>Government ID such as aadhaar card or driving license or voter id or PAN Card</li>
                        </ol>
                        <p>Additionally in the course of providing you with access to the Services, and in order to provide you access to the features offered through the Portal and to verify your identity, secure your account details, you may give us the permission to capture, record your device related information, operating system information, network information, location information etc. You may choose to allow us to gather information in relation to the apps installed on your device in order for us to better our Services and your experience on the Portal. You may also be required to furnish additional information, including your Permanent Account Number.</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>3. Types of information we collect</p>
                        <p style={{ fontSize: "14px" }}>We collect the following types of information from you when you register on the Funzy11 Platform and use our Services: any information that exclusively identifies you for e.g., your name, email address, mobile number, date of birth, display picture, social media account ID (where provided by you), postal address, Permanent Account Number (PAN) and bank account details. In some cases, for options such as virtual private rooms for Contests (as defined in the Terms & Conditions), you may provide us with personal information of another person, for which we assume you have consent from such person to share their information with us. Further, we collect non-personal information, which is information that does not exclusively identify you but is related to you nonetheless such as, information about your interests and demographics.</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>4. Location of personal information</p>
                        <p style={{ fontSize: "14px" }}>The Company is located in India. Depending on the scope of your interactions with our Services/ Funzy11 Platform, your personal information may be stored in or accessed in India. Whenever we transfer personal information to other jurisdictions, we will ensure that the information is transferred in accordance with this Privacy Policy and as permitted by applicable data protection laws.</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>5. Security Procedures:</p>
                        <p style={{ fontSize: "14px" }}>All information gathered on Funzy11 is securely stored within the Funzy11-controlled database. The database is stored on servers secured behind a firewall; access to such servers being password-protected and strictly limited based on need-to-know basis. However, we understand that as effective as our security measures are, no security system is impenetrable. Thus, we cannot guarantee the security of our database, nor can we guarantee that information you supply will not be intercepted while being transmitted to us over the Internet. Further, any information you include in a posting to the discussion areas will be available to anyone with internet access. By using the Portal, you understand and agree that your information may be used in or transferred to countries other than India.</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>6. Third Parties</p>
                        <p style={{ fontSize: "14px" }}>Our Services/ use of Funzy11 Platform may include third party links to other websites and/or applications. Such websites are governed by their respective privacy policies, which are beyond Funzy11 control. Third party advertising partners may collect information about you when you interact with their content, advertising, or services. Funzy11 is not responsible for the privacy practices or the content of such websites.</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>7. Access and choice</p>
                        <p style={{ fontSize: "14px" }}>You can view, update, and delete certain information about you, your account and your interactions with our Services/ Funzy11 Platform. If you cannot access or update your information yourself, you can always contact us for assistance.
                            You have choices about the collection and use of your personal information. Our Services/ Funzy11 Platform include settings that provide you with options as to how your information is being used wherein you can choose not to provide certain information.</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>8. Advertising</p>
                        <p style={{ fontSize: "14px" }}>When Funzy11 presents information to its online advertisers - to help them understand its audience and confirm the value of advertising on the Portal - it is usually in the form of aggregated anonymized data (information that cannot be used to trace a user) of Users that may include statistics and/or data concerning User traffic, User responsiveness and User behaviour to such advertisements on our Portal. When you register with Funzy11, we contact you from time to time about updating your content to provide features which we believe may benefit you.</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>9. Access and choice</p>
                        <p style={{ fontSize: "14px" }}>You can view, update, and delete certain information about you, your account and your interactions with our Services/ Funzy11 Platform. If you cannot access or update your information yourself, you can always contact us for assistance.
                            You have choices about the collection and use of your personal information. Our Services/ Funzy11 Platform include settings that provide you with options as to how your information is being used wherein you can choose not to provide certain information.</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>10.Disclaimer</p>
                        <p style={{ fontSize: "14px" }}>Several deceptive emails, websites, blogs etc. claiming to be from or associated with Funzy11 may or are circulating on the Internet ("Deceptive Communication"). Such Deceptive Communication may include our logo, photos, links, content or other information. Some Deceptive Communication may call the User requesting the User to provide login name, password etc. or inform the User that the User has won a prize/ gift or provide a method to commit an illegal/ unauthorized act or deed or request detailed personal information or a payment of some kind. The sources and contents of these Deceptive Communications and accompanying materials are in no way associated with Funzy11. For your own protection, we strongly recommend not responding to such Deceptive Communication. </p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>12.Applicable Law and Jurisdiction</p>
                        <p style={{ fontSize: "14px" }}>By visiting this Portal, you agree that the laws of the Republic of India without regard to its conflict of laws principles, govern this Privacy Policy and any dispute arising in respect hereof shall be subject to and governed by the dispute resolution process set out in the Terms and Conditions</p>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>13.Contact Us</p>
                        <p style={{ fontSize: "14px" }}>Any questions or clarifications with respect to this Privacy Policy or any complaints, comments, concerns or feedback can be sent to Funzy11 at funzzy@gmail.com by normal/physical mail addressed to:</p>
                        <p style={{ fontSize: "14px" }}>Attn: Funzy11 Team</p>
                        <p style={{ fontSize: "14px" }}>CyberSonic Technology Private Limited,</p>
                        <p style={{ fontSize: "14px" }}>Outer Ring Rd, Banaswadi,Bengalore 560043</p>
                        <p style={{ fontSize: "14px" }}>India.</p>
                    </div>

                </div>
                <div style={{ backgroundColor: "black", justifyContent: "center", textAlign: "center" }}>
                    <Link to="/"><img src={Logo} alt="Description of the image" className='mt-4' style={{ height: "60px" }} /></Link>
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
                        <Link to="/privacypolicy"><p className='text-white mt-3' style={{ fontSize: "12px" }}>Privacy Policy</p></Link>
                        <Link to="/termsandconditions"><p className='text-white mt-3' style={{ fontSize: "12px" }}>terms and conditions</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy