import { FollowUsInstagram } from "../../component/FollowUsInstagram/FollowUsInstagram";
import "./ContactUs.css";
export const ContactUs = () => {

    return (
      <div>
        <section className="hero-sectionz" style={{
                background: "url('./images/tourist-carrying-baggage.jpg') center center / cover no-repeat"
            }}>
            <div className="container text-center hero-content">
                <h1 className="hero-title">Contact Us</h1>
                <p className="hero-description">
                    Book flights,trains,and buses easily with our trusted ticket booking service. <br/> Fast, secure, and
                    hassle-free travel planning starts here.
                </p>
            </div>
        </section>

            <section className="contact-section py-5">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6 text-center mb-4 mb-lg-0">
                            <div className="image-wrapper">
                                <img src="images/travelling.png" className="img-fluid main-img" alt="Traveler" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="contact-content">
                                <p className="contact-small">Contact Us</p>
                                <h2 className="contact-title">Get In Touch</h2>
                                <p className="contact-desc">
                                    Our attraction pass save you more than buying individual
                                    tickets for your tour package system.
                                </p>

                                <form>
                                    <div className="row mb-3">
                                        <div className="col-md-6 mb-3 mb-md-0">
                                            <label>Name :</label>
                                            <input type="text" className="form-control" placeholder="Enter Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Email :</label>
                                            <input type="email" className="form-control" placeholder="Enter Email" />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label>Message :</label>
                                        <textarea className="form-control" rows="4" placeholder="Write Message"></textarea>
                                    </div>

                                    <button type="submit" className="btn send-btn">
                                        <span>Send</span>
                                        <span className="btn-icon">
                                        <i className="fa-solid fa-arrow-right-long"></i>
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="map-section">
                <iframe 
                    title="Albany New York Location Map"
                    src="https://www.google.com/maps?q=Albany,New York&output=embed"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    >
                </iframe>
            </section>

            <FollowUsInstagram />
      </div>
    )
}
