import React, { Component } from 'react'
import './style.css'
import './style-starter.css'

class Dashboard extends Component {
    // componentDidMount(){
    //     window.location.href = "https://sites.google.com/view/ahamedafsal/home";
    //  }
    render() {
        return (
            <div>
                <header className="w3l-header">
                    <div className="hero-header-11">
                        <div className="hero-header-11-content">
                            <div className="container">
                                <nav className="navbar navbar-expand-xl navbar-light py-sm-2 py-1 px-0">
                                    <a className="navbar-brand editContent" href="index.html">Nismal Afsal EC</a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon fa fa-bars"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item active">
                                                <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#gallery">Work</a>
                                            </li>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="#stats">Fun Facts</a>
                                                <a className="dropdown-item" href="#testimonials">Testimonials</a>
                                            </div>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#contact">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="w3l-main-banner">
                    <div className="companies20-content">
                        <div className="companies-wrapper">
                            <div className="item">
                                <li />
                                <div className="slider-info banner-view">
                                    <div className="banner-info container">
                                        <h4 style={{ fontStyle: 'italic' }}>Hello, I’m<br /></h4>
                                        <h3 className="banner-text">  AHAMMED AFSAL <span style={{ fontStyle: 'inherit' }}>EC</span> </h3>
                                        <h3 />
                                        <p className="my-4 mb-5">Architect</p><br />
                                        <a href="#gallery" className="btn btn-primary theme-button mr-3">My Work</a>
                                    </div>
                                </div>
                                <li />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="w3l-gallery2" id="gallery">
                    <div className="insta-picks py-5">
                        <div className="container py-lg-5">
                            <h3 className="global-title">Latest Works</h3>
                            <div className="row no-gutters masonry">
                                <div className="col-md-4 col-sm-6 brick">
                                    <a href="images/1.jpg" className="js-img-viwer d-block" data-caption="There are many variations of popular graphic design"
                                        data-id="lion">
                                        <img src="images/1.jpg" className="img-fluid insta-pic" alt="insta-pic" />
                                        <div className="content-overlay"></div>
                                        <div className="content-details fadeIn-top">
                                            <h4>Work title here</h4>
                                            <p>Design</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 brick">
                                    <a href="images/2.jpg" className="js-img-viwer d-block" data-caption="There are many variations of popular graphic design"
                                        data-id="camel">
                                        <img src="images/2.jpg" className="img-fluid insta-pic" alt="insta-pic" />
                                        <div className="content-overlay"></div>
                                        <div className="content-details fadeIn-top">
                                            <h4>Work title here</h4>
                                            <p>Design</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 brick">
                                    <a href="images/3.jpg" className="js-img-viwer d-block" data-caption="There are many variations of popular graphic design"
                                        data-id="hippopotamus">
                                        <img src="images/3.jpg" className="img-fluid insta-pic" alt="insta-pic" />
                                        <div className="content-overlay"></div>
                                        <div className="content-details fadeIn-top">
                                            <h4>Work title here</h4>
                                            <p>Design</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 brick">
                                    <a href="images/4.jpg" className="js-img-viwer d-block" data-caption="There are many variations of popular graphic design"
                                        data-id="koala">
                                        <img src="images/4.jpg" className="img-fluid insta-pic" alt="insta-pic" />
                                        <div className="content-overlay"></div>
                                        <div className="content-details fadeIn-top">
                                            <h4>Work title here</h4>
                                            <p>Design</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 brick">
                                    <a href="images/5.jpg" className="js-img-viwer d-block" data-caption="There are many variations of popular graphic design"
                                        data-id="bear">
                                        <img src="images/5.jpg" className="img-fluid insta-pic" alt="insta-pic" />
                                        <div className="content-overlay"></div>
                                        <div className="content-details fadeIn-top">
                                            <h4>Work title here</h4>
                                            <p>Design</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 brick">
                                    <a href="images/6.jpg" className="js-img-viwer d-block" data-caption="There are many variations of popular graphic design"
                                        data-id="rhinoceros">
                                        <img src="images/6.jpg" className="img-fluid insta-pic" alt="insta-pic" />
                                        <div className="content-overlay"></div>
                                        <div className="content-details fadeIn-top">
                                            <h4>Work title here</h4>
                                            <p>Design</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="text-center">
                                <a href="https://www.instagram.com/afsal.ec/" className="follow-insta-button btn btn-secondary p-3 mt-5" target="_blank">
                                    Follow me on Instagram
          </a>
                                <section class="w3l-index5" id="intro">
                                    <div class="new-block top-bottom">
                                        <div class="container">
                                            <div class="middle-section text-center">
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                </div>
                <section className="w3l-index5" id="intro">
                    {/* <div className="new-block top-bottom">
      <div className="container">
        <div className="middle-section text-center">
        <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
            <iframe src="https://www.youtube.com/embed/oWP9Riq-ZBg" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div> */}
                </section>

                <section className="w3l-contact py-5" id="contact">
                    <div className="container py-lg-3">
                        <h3 className="global-title">Drop me a Message</h3>
                        <div className="row">
                            <div className="col-md-8 contact-form">
                                <form action="https://sendmail.w3layouts.com/submitForm" method="post">
                                    <input type="text" className="form-control" name="w3lName" placeholder="Name" /><br />
                                    <input type="email" className="form-control" name="w3lSender" placeholder="E-mail" /><br />
                                    <input type="text" className="form-control" name="w3lSubject" placeholder="Subject" /><br />
                                    <textarea className="form-control" name="w3lMessage" placeholder="Your Message" style={{ height: '150px' }}></textarea><br />
                                    <button className="btn btn-primary theme-button" type="submit">Send</button>
                                </form>
                            </div>
                            <div className="col-md-4 mt-md-0 mt-5 w3-contact-address">
                                <b>Address:</b>
                                <p>Company Inc,</p>
                                <p>Las vegas street 201,</p>
                                <p>55001 Nevada, 445586,</p>
                                <p>United States of America.</p>
                                <br />
                                <b>Phone:</b>
                                <p><a href="tel:+11-22-55-66-05" />+11-22-55-66-05</p>
                                <p><a href="tel:+11-22-55-66-06" />+11-22-55-66-06</p>
                                <br />
                                <b>Email:</b>
                                <p><a href="mailto:christopher@mysite.com">christopher@mail.com</a></p>
                                <p><a href="mailto:support@mysite.com">support@mail.com</a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div >


        )
    }
}

export default Dashboard
