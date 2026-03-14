import { useState } from "react";
import "./AboutUs.css";
import { FollowUsInstagram } from "../../component/FollowUsInstagram/FollowUsInstagram";
export const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of tours do you offer?",
      answer:
        "We offer a wide range of tours, including cultural, adventure, luxury, and customized itineraries. Popular destinations include Europe, Africa (e.g., Morocco)."
    },
    {
      question: "Are the tours customizable?",
      answer:
        "Yes, we customize tours according to your preferences, travel dates, and budget."
    },
    {
      question: "What safety measures do you follow?",
      answer:
        "We follow international safety standards, certified guides, and secure transport services."
    },
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 2–4 weeks in advance for better availability."
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Free cancellation up to 48 hours before departure for most packages."
    }
  ];
    return (
      <div>
        <section className="hero-sectionv" style={{
            background: "url('./images/people-taking-part-sustainable-travel-movement.jpg') center center/cover no-repeat",
            height: "400px"
          }}>
        
            <div className="container text-center hero-content">
                <h1 className="hero-title">About Us</h1>
                <p className="hero-description">
                    Take a close look at our exceptional portfolio of luxury properties available for sale or rent. Each
                    listing has been carefully selected to meet our high standards of quality and comfort.
                </p>
            </div>
        </section>

        <section className="section bg-white mt-5">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6 position-relative">
                        <div className="about-img">
                            <img alt="" src="./images/about_us_journey_sec.png" className="img-fluid"/>
                        </div>
                        <div className="badge-discount">
                            <img src="./images/65_dis.png" alt=""/>
                        </div>
                        <div className="stat-box">
                            <span className="zero_plus" style={{ color: "var(--main-green-color)" }}>0+</span>
                            <small>Locations World Wide</small>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <small style={{ color: "var(--main-green-color)", fontWeight: 600 }}>About Travel Agency</small>
                        <h2 className="fw-bold mt-2" style={{ fontSize: "34px", lineHeight: "1.3" }}>Our Journey Memorable Adventures
                            Worldwide</h2>
                        <p className="text-muted">Our attraction pass save you more than buying individual tickets for your
                            package system.</p>
                        <div className="d-flex align-items-start mt-4">
                            <div className="feature-icon">
                                <img src="./images/journey_icon_1.png" alt=""/>
                            </div>
                            <div>
                                <h6 className="fw-bold">24/7 Support For Hassle-Free Trips</h6>
                                <p className="text-muted small">Our attraction pass save you more than buying individual
                                    tickets.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start mt-3">
                            <div className="feature-icon">
                                <img src="./images/journey_icon_2.png" alt=""/>
                            </div>
                            <div>
                                <h6 className="fw-bold">Exclusive Deals On Top Destinations</h6>
                                <p className="text-muted small">Our attraction pass save you more than buying individual
                                    tickets.</p>
                            </div>
                        </div>
                        <a href="/" className="btn btn-teal mt-4">More About Travel <div className="arrow_journey"> → </div> </a>
                    </div>
                </div>
            </div>
        </section>

        <section className="section mt-5">
            <div className="container">
                <div className="promo row align-items-center">
                    <div className="col-lg-6 left">
                        <h3>Grab up to <span style={{ color: "var(--main-green-color)" }}>35% off</span><br/>on your favorite
                            Destination</h3>
                        <p className="text-muted">Limited time offer, don't miss the opportunity</p>
                        <a href="/" className="btn btn-teal mt-3">Book Now</a>
                    </div>
                    <div className="col-lg-6">
                        <img alt="" src="./images/about_us_grab_up_sec.png" className="img-fluid grab_up_img"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="popular mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-lg-6" style={{ height: "460px" }}>
                                <div className="grid-item cruises">
                                    <img alt="" src="./images/cruises.png"/>
                                    <div className="overlay"></div>
                                    <div className="label">Cruises</div>
                                </div>
                                <div className="grid-item museum">
                                    <img alt="" src="./images/Museum_Tour.png"/>
                                    <div className="overlay"></div>
                                    <div className="label">Museum Tour</div>
                                </div>

                            </div>

                            <div className="col-lg-6" style={{ height: "460px"}}>
                                <div className="grid-item beach">
                                    <img alt="" src="./images/Beach_Tours.png"/>
                                    <div className="overlay"></div>
                                    <div className="label">Beach Tours</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-5 right-grid" style={{ height: "460px"}}>
                        <div className="grid-item city">
                            <img alt="" src="./images/City_Tours.png"/>
                            <div className="overlay"></div>
                            <div className="label">City Tours</div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="grid-item food">
                                    <img alt="" src="./images/Food.png"/>
                                    <div className="overlay"></div>
                                    <div className="label">Food</div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="grid-item hiking">
                                    <img alt="" src="./images/Hiking.png"/>
                                    <div className="overlay"></div>
                                    <div className="label">Hiking</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-wrapper">
            <div className="container">
                <div className="row align-items-start">

                    <div className="col-lg-5">
                        <div className="left-heading mb-4">
                            <h5>
                                Trusted Solution Of Your <br/>
                                <span>Tourism Services</span>
                            </h5>
                        </div>

                        <div className="feature-card vip">
                            <div className="icon-box">
                                <i className="bi bi-bag-check"></i>
                            </div>
                            <div>
                                <h6>VIP Packages</h6>
                                <p>Include premium seating, meet-and-greet experiences, backstage tours.</p>
                            </div>
                        </div>

                        <div className="feature-card travel">
                            <div className="icon-box">
                                <i className="bi bi-airplane"></i>
                            </div>
                            <div>
                                <h6>Travel Packages</h6>
                                <p>Bundles that include concert tickets, accommodations.</p>
                            </div>
                        </div>

                        <div className="feature-card price">
                            <div className="icon-box">
                                <i className="bi bi-geo-alt"></i>
                            </div>
                            <div>
                                <h6>Best Price Guarantee</h6>
                                <p>Such as private rehearsals, soundcheck access.</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-7">
                        <span className="badge-custom">Most Popular Providers</span>
                        <h3 className="right-title">Try Relaxing Accomodations.</h3>

                        <div className="faq-accordion">

                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`faq-item ${activeIndex === index ? "active" : ""}`}
                                >

                                <div
                                    className="faq-question"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    {faq.question}
                                    <span className="faq-icon">
                                    {activeIndex === index ? "-" : "+"}
                                    </span>
                                </div>

                                {activeIndex === index && (
                                    <div className="faq-answer">
                                    {faq.answer}
                                    </div>
                                )}

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="testimonial mt-5" style={{
                background: "url('/images/testimonial_bg.png') center / cover no-repeat"
            }}>
            <div className="container content">
                <div className="row align-items-center">
                    <div className="col-lg-5 text-start">
                        <div className="subtitle">Our Testimonials</div>
                        <h2>Good Reviews By <span style={{ color: "#19a7a0"}}>Clients</span></h2>
                        <p className="mt-3" style={{ color: "#ccc"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                            eiusmod tempor incididunt ut labore.</p>
                    </div>
                    <div className="col-lg-7">
                        <div className="quote">
                            <img src="./images/quote_icon.png" alt=""/>
                            <i> Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum a
                                simple lorem ipsum has been the industry's standard dummy text ever since. </i>
                        </div>
                        <div className="client">
                            <div className="img">
                                <img src="./images/Manager.png" alt=""/>
                            </div>
                            <div className="text">
                                Kelvin Mick<br/><small style={{ color: "#bbb"}}>Manager</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section text-center mt-5 mb-5">
            <div className="container">
                <h5 style={{ color: "#dda927"}}>Top Deals</h5>
                <h2 className="fw-bold mb-0">The Last <span style={{ color: "var(--main-green-color)" }}>Minute Deals</span></h2>
                <p className="mb-4" style={{color: "#c0c0c0"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                    eiusmod tempor incididunt ut labore.</p>
                <div className="row g-4">
                    <div className="col-lg-4">
                        <div className="card deal-card">
                            <img alt="" src="./images/LMD_norway.png"/>
                            <div className="card-body text-start cardtext">
                                <h5> <span style={{ color: "#dda927", fontFamily: "'Playfair Display', sans-serif" }}> Norway
                                    </span></h5>
                                <h4> <span style={{ color: "#e6e6e6", fontFamily: "'Playfair Display', sans-serif" }}> Norway Lake
                                    </span></h4>
                                <div className="stars mt-2 mb-2"> ⭐⭐⭐⭐⭐ (16)</div>
                                <div className="price">$180.00 <span
                                        style={{ color: "#c0c0c0", fontSize: "medium", fontWeight: 400 }}>| per person </span>
                                    <span style={{ marginLeft: "30px", color: "#bbb" }}>6 Days Tours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card deal-card"><img alt="" src="./images/LMD_usa.png"/>
                            <div className="card-body text-start cardtext">
                                <h5> <span style={{ color: "#dda927", fontFamily: "'Playfair Display', sans-serif" }}>USA </span>
                                </h5>
                                <h4> <span style={{ color: "#e6e6e6", fontFamily: "'Playfair Display', sans-serif" }}>New York City
                                    </span></h4>
                                <div className="stars mt-2 mb-2"> ⭐⭐⭐⭐⭐ (12)</div>
                                <div className="price">$140.00 <span
                                        style={{ color: "#c0c0c0", fontSize: "medium", fontWeight: 400 }}>| per person </span>
                                    <span style={{ marginLeft: "30px", color: "#bbb" }}>5 Days Tours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card deal-card">
                            <img alt="" src="./images/LMD_maldives.png"/>
                            <div className="card-body text-start cardtext">
                                <h5><span
                                        style={{ color: "#dda927", fontFamily: "'Playfair Display', sans-serif" }}>Maldives</span>
                                </h5>
                                <h4><span style={{ color: "#e6e6e6", fontFamily: "'Playfair Display', sans-serif" }}>Malie
                                        City</span></h4>
                                <div className="stars mt-2 mb-2"> ⭐⭐⭐⭐⭐ (12)</div>
                                <div className="price">$140.00 <span
                                        style={{ color: "#c0c0c0", fontSize: "medium", fontWeight: 400 }}>| per person </span>
                                    <span style={{ marginLeft: "30px", color: "#bbb" }}>3 Days Tours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/" className="btn btn-teal mt-5">View All Deals</a>
            </div>
        </section>

        <FollowUsInstagram />
      </div>
    )
}
