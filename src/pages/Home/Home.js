import { useEffect, useState } from "react";
import "./Home.css";
import { FollowUsInstagram } from "../../component/FollowUsInstagram/FollowUsInstagram";
export const Home = () => {

    const slides = [
    {
      bg: "/images/asd.png",
      title: "Maldives Island",
      desc: "When An Unknown Printer Took A Galley Offer Type Area Year Andey Make Specimen Book",
      price: "$299",
      offer: "* This Offer Valid Till 22 August"
    },
    {
      bg: "/images/FOSJW7UzC5ykrRKuznbb0YkzlRQR3LQ7K2BT1x8G.png",
      title: "Mountain Adventure",
      desc: "Experience the beauty of nature and fresh air",
      price: "$199",
      offer: "* Special Offer This Month"
    }
  ];

  const [index, setIndex] = useState(0);

    useEffect(() => {
        const slider = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);

    return () => clearInterval(slider);
    }, [slides.length]);

  const slide = slides[index];

  return (
    <div>
      <section
        className="hero-section position-relative"
        style={{
          background: `url(${slide.bg}) center center / cover no-repeat`,
          height: "400px",
          transition: "all 0.5s ease"
        }}
      >
        <div className="container text-center hero-content">

          <p className="offer-text">
            {slide.offer}
          </p>

          <h1 className="hero-title">
            {slide.title}
          </h1>

          <p className="hero-description">
            {slide.desc}
          </p>

          <p className="price-text">
            Booking Start From <strong>{slide.price}</strong>/night
          </p>

          <div className="nbgfgf55">
            <button className="btn btn-tour mt-3">
              TAKE A TOUR →
            </button>
          </div>

        </div>
      </section>

      <section className="menu-section">
        <div className="container my-5">
          <div className="flight-menu-wrapper gjhkdfgdf">
            <div className="flight-menu-bar">
              <div className="flight-menu-item active">
                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/airplane.svg"
                  alt=""
                />
                <span>Flights</span>
              </div>

              <div className="flight-menu-item">
                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/building.svg"
                  alt=""
                />
                <span>Hotels</span>
              </div>

              <div className="flight-menu-item">
                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/house-door.svg"
                  alt=""
                />
                <span>Villas & Homestays</span>
              </div>

              <div className="flight-menu-item">
                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/briefcase.svg"
                  alt=""
                />
                <span>Holiday Packages</span>
              </div>

              <div className="flight-menu-item">
                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/train-front.svg"
                  alt=""
                />
                <span>Trains</span>
              </div>

              <div className="flight-menu-item">
                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/bus-front.svg"
                  alt=""
                />
                <span>Buses</span>
              </div>

              <div className="flight-menu-item">
                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/taxi-front.svg"
                  alt=""
                />
                <span>Cabs</span>
              </div>

              <div className="flight-menu-item">
                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/balloon.svg"
                  alt=""
                />
                <span>Tours</span>
              </div>

              <div className="flight-menu-item">
                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/file-earmark-text.svg"
                  alt=""
                />
                <span>Visa</span>
              </div>

              <div className="flight-menu-item">
                <img src="./images/ship.png" alt="" />
                <span>Cruise</span>
              </div>

              <div className="flight-menu-item">
                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/currency-exchange.svg"
                  alt=""
                />
                <span>Forex</span>
              </div>

              <div className="flight-menu-item">
                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/shield-check.svg"
                  alt=""
                />
                <span>Insurance</span>
              </div>
            </div>
          </div>

          <div className="flight-main-card">
            <div className="flight-content-area">
              <div className="flight-trip-type mb-3">
                <label>
                  <input type="radio" name="tripType" value="oneway" checked />{" "}
                  One Way
                </label>
                <label>
                  <input type="radio" name="tripType" value="round" /> Round
                  Trip
                </label>
                <label>
                  <input type="radio" name="tripType" value="multi" /> Multi
                  City
                </label>
              </div>

              <div className="form row g-4 mt-3 align-items-end">
                <div className="col-lg-5">
                  <div className="row align-items-center">
                    <div className="col-md-5 col-5">
                      <label>Departure From</label>
                      <h5>New Delhi</h5>
                      <p>DEL, Indira Gandhi International</p>
                    </div>

                    <div className="col-md-2 col-2 text-center">
                      <div className="circle">
                        <i className="fa-solid fa-right-left"></i>
                      </div>
                    </div>

                    <div className="col-md-5 col-5">
                      <div className="ps-3">
                        <label>Going To</label>
                        <h5>Mumbai</h5>
                        <p>BOM, Chattrapati Shivaji</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <label>Departure Date</label>
                      <h5>20 Feb’26</h5>
                      <p>Friday</p>
                    </div>

                    <div className="col-md-4">
                      <label>Return Date</label>
                      <h6>
                        Book Round Trip <br /> to save extra
                      </h6>
                    </div>

                    <div className="col-md-4">
                      <label>Travellers & Class</label>
                      <h5>1 Traveller</h5>
                      <p>Economy</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h6>SPECIAL FARES</h6>
                <div className="d-flex gap-2 flex-wrap dfkmkdf">
                  <button className="flight-fare-btn active">Regular</button>
                  <button className="flight-fare-btn">Student</button>
                  <button className="flight-fare-btn">Armed Forces</button>
                  <button className="flight-fare-btn">Senior Citizen</button>
                  <button className="flight-fare-btn">Doctor & Nurses</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ghaadasd">
        <div className="text-center mt-4 ">
          <button className="flight-search-btn">SEARCH</button>
        </div>
      </div>

      <section className="top-destinations py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="main-title">
              Explore <span>Top Destinations</span>
            </h2>
            <p className="section-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-8">
              <div className="col-lg-12 mb-4">
                <div className="destiny-card large-card">
                  <img src="./images/desleftup.jpg" alt="" />
                  <div className="card-content">
                    <div>
                      <p className="country">Italy</p>
                      <h4>Caspian Valley</h4>
                    </div>
                    <span className="tour-badge">18 Tours</span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="destiny-card small-card">
                    <img src="./images/desleftdolef.jpg" alt="" />
                    <div className="card-content">
                      <div>
                        <p className="country">Moscow</p>
                        <h4>Russia</h4>
                      </div>
                      <span className="tour-badge">15 Tours</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="destiny-card small-card">
                    <img src="./images/desleftdorit.jpg" alt="" />
                    <div className="card-content">
                      <div>
                        <p className="country">Florida</p>
                        <h4>America</h4>
                      </div>
                      <span className="tour-badge">32 Tours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="destiny-card tall-card">
                <img src="./images/destiright.jpg" alt="" />
                <div className="card-content">
                  <div>
                    <p className="country">England</p>
                    <h4>London</h4>
                  </div>
                  <span className="tour-badge">15 Tours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-destinations py-5">
        <div className="container">
          <h4 className="section-title mb-4">
            Flights to Popular Domestic Destinations from
          </h4>

          <div className="row g-4 domestic-row">
            <div className="col-6 col-md-4 col-lg custom-col">
              <div className="destination-card">
                <img src="./images/mumbai.png" alt="" />
                <div className="overlay">
                  <h5>Mumbai</h5>
                  <p>Starting from</p>
                  <h6>₹9,107</h6>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg custom-col">
              <div className="destination-card">
                <img src="./images/bangalore.png" alt="" />
                <div className="overlay">
                  <h5>Bangalore</h5>
                  <p>Starting from</p>
                  <h6>₹11,398</h6>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg custom-col">
              <div className="destination-card">
                <img src="./images/pune.png" alt="" />
                <div className="overlay">
                  <h5>Pune</h5>
                  <p>Starting from</p>
                  <h6>₹9,438</h6>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg custom-col">
              <div className="destination-card">
                <img src="./images/kolkata.png" alt="" />
                <div className="overlay">
                  <h5>Kolkata</h5>
                  <p>Starting from</p>
                  <h6>₹8,181</h6>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg custom-col">
              <div className="destination-card">
                <img src="./images/hydrabad.png" alt="" />
                <div className="overlay">
                  <h5>Hyderabad</h5>
                  <p>Starting from</p>
                  <h6>₹9,508</h6>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg custom-col">
              <div className="destination-card">
                <img src="./images/goa.png" alt="" />
                <div className="overlay">
                  <h5>Goa</h5>
                  <p>Starting from</p>
                  <h6>₹9,736</h6>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg custom-col">
              <div className="destination-card">
                <img src="./images/chennai.png" alt="" />
                <div className="overlay">
                  <h5>Chennai</h5>
                  <p>Starting from</p>
                  <h6>₹10,745</h6>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg custom-col">
              <div className="destination-card">
                <img src="./images/amhedabad.png" alt="" />
                <div className="overlay">
                  <h5>Ahmedabad</h5>
                  <p>Starting from</p>
                  <h6>₹7,071</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <a href="/" className="btn btn-tour">
              See all the locations ↗
            </a>
          </div>

          <h4 className="section-title mt-5 mb-4">
            Flights to Popular International Destinations from
          </h4>

          <div className="row g-4">
            <div className="col-lg-2">
              <div className="destination-card">
                <img src="./images/topdesti.png" alt="" />
                <div className="overlay">
                  <h5>Top Destination</h5>
                  <p>Starting from</p>
                  <h6>₹11,809</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="destination-card">
                <img src="./images/asia.png" alt="" />
                <div className="overlay">
                  <h5>Asia</h5>
                  <p>Starting from</p>
                  <h6>₹11,809</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="destination-card">
                <img src="./images/mid-east.png" alt="" />
                <div className="overlay">
                  <h5>Middle East</h5>
                  <p>Starting from</p>
                  <h6>₹20,021</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="destination-card">
                <img src="./images/affrica.png" alt="" />
                <div className="overlay">
                  <h5>Africa</h5>
                  <p>Starting from</p>
                  <h6>₹32,126</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="destination-card">
                <img src="./images/europe.png" alt="" />
                <div className="overlay">
                  <h5>Europe</h5>
                  <p>Starting from</p>
                  <h6>₹38,039</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="destination-card">
                <img src="./images/northamerica.png" alt="" />
                <div className="overlay">
                  <h5>North America</h5>
                  <p>Starting from</p>
                  <h6>₹56,545</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <a href="/" className="btn btn-tour">
              See all the locations ↗
            </a>
          </div>
        </div>
      </section>
      <section className="travel-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="travleft col-lg-6">
              <span className="small-heading">Dream Your Next Trip</span>

              <h1 className="main-heading mt-3">
                Discover When Even <br />
                You Want To Go
              </h1>

              <p className="description mt-3">
                Are you tired of the typical tourist destinations and looking to
                step out of your comfort zone? Adventure travel may be the
                perfect solution for you! Here are four.
              </p>

              <div className="feature-box d-flex mt-4">
                <div className="icon-box">
                  <img src="./images/locate.png" alt="" />
                </div>
                <div>
                  <h5>Best Travel Agency</h5>
                  <p>
                    Are you tired of the typical tourist destination and looking
                    step out of your comfort.
                  </p>
                </div>
              </div>

              <div className="feature-box d-flex mt-4">
                <div className="icon-box">
                  <img src="./images/travel.png" alt="" />
                </div>
                <div>
                  <h5>Secure Journey With Us</h5>
                  <p>
                    Are you tired of the typical tourist destination and looking
                    step out of your comfort.
                  </p>
                </div>
              </div>

              <a href="/" className="btn btn-tour mt-4">
                BOOK YOUR TRIP →
              </a>
            </div>

            <div className="travright col-lg-6 position-relative mt-5 mt-lg-0">
              <img
                src="./images/starlogo.png"
                className="watermark-icon"
                alt="Compass Icon"
              />

              <img
                src="./images/boat.png"
                className="img-fluid big-image"
                alt="Boats"
              />

              <div className="sm-card">
                <img
                  src="./images/human.png"
                  className="img-fluid"
                  alt="Couple"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="recommended-hotels py-5">
        <div className="container">
          <h2 className="section-title mb-4">Recommended Hotels</h2>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="hotel-card">
                <img
                  src="./images/hotel1.png"
                  className="img-fluid hotel-img"
                  alt="Hotel"
                />

                <div className="hotel-content">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="hotel-title">Planet Hollywood Bea...</h5>
                    <span className="rating">5.0</span>
                  </div>

                  <p className="location">Mumbai</p>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <a href="/" className="btn btn-tour">
                      Book Now ↗
                    </a>
                    <h4 className="price">₹42,120</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="hotel-card">
                <img
                  src="./images/hotel2.png"
                  className="img-fluid hotel-img"
                  alt="Hotel"
                />

                <div className="hotel-content">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="hotel-title">Planet Hollywood Bea...</h5>
                    <span className="rating">5.0</span>
                  </div>

                  <p className="location">Goa</p>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <a href="/" className="btn btn-tour">
                      Book Now ↗
                    </a>
                    <h4 className="price">₹40,120</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="hotel-card">
                <img
                  src="./images/hotel3.png"
                  className="img-fluid hotel-img"
                  alt="Hotel"
                />

                <div className="hotel-content">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="hotel-title">The Suryaa New Delhi</h5>
                    <span className="rating">5.0</span>
                  </div>

                  <p className="location">New Delhi</p>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <a href="/" className="btn btn-tour">
                      Book Now ↗
                    </a>
                    <h4 className="price">₹61,950</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="hotel-card">
                <img
                  src="./images/hotel4.jpg"
                  className="img-fluid hotel-img"
                  alt="Hotel"
                />

                <div className="hotel-content">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="hotel-title">Planet Hollywood Bea...</h5>
                    <span className="rating">5.0</span>
                  </div>

                  <p className="location">Kolkata</p>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <a href="/" className="btn btn-tour">
                      Book Now ↗
                    </a>
                    <h4 className="price">₹45,120</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="hotel-card">
                <img
                  src="./images/hotel5.jpg"
                  className="img-fluid hotel-img"
                  alt="Hotel"
                />

                <div className="hotel-content">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="hotel-title">Planet Hollywood Bea...</h5>
                    <span className="rating">5.0</span>
                  </div>

                  <p className="location">Kochi</p>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <a href="/" className="btn btn-tour">
                      Book Now ↗
                    </a>
                    <h4 className="price">₹50,120</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="hotel-card">
                <img
                  src="./images/hotel6.png"
                  className="img-fluid hotel-img"
                  alt="Hotel"
                />

                <div className="hotel-content">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="hotel-title">The Suryaa New Delhi</h5>
                    <span className="rating">5.0</span>
                  </div>

                  <p className="location">Chennai</p>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <a href="/" className="btn btn-tour">
                      Book Now ↗
                    </a>
                    <h4 className="price">₹51,950</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="testimonials-section"
        style={{
          backgroundImage: "url('./images/testimoniback.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay2"></div>
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-5 text-white">
              <span className="sub-heading">Our Testimonials</span>
              <h2 className="testimonial-title display-3">
                Good Reviews By <br />
                <span>Clients</span>
              </h2>
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>

            <div className="col-lg-7 text-white">
              <div className="quote-box">
                <h1 className="quote-icon">“</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem ipsum has been the industry’s
                  standard dummy text ever since.
                </p>

                <div className="client-info d-flex align-items-center mt-4">
                  <img
                    src="./images/client.png"
                    className="client-img"
                    alt=""
                  />
                  <div className="ms-3">
                    <h6 className="mb-0 text-warning">Kelton Mick</h6>
                    <small>Manager</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="top-deals py-5">
        <div className="container text-center">
          <h2 className="deals-title">
            The Last <span>Minute Deals</span>
          </h2>
          <p className="deals-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="row g-4 mt-4">
            <div className="col-lg-4 col-md-6">
              <div className="deal-card">
                <img src="./images/deal1.png" className="img-fluid" alt="" />
                <div className="deal-overlay">
                  <p className="country">Norway</p>
                  <h5>Norway Lake</h5>
                  <div className="ratings">
                    ★★★★★ <span>(16)</span>
                  </div>
                  <div className="price-row">
                    <strong>$180.00</strong> | 6 Days Tours
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="deal-card">
                <img src="./images/deal2.png" className="img-fluid" alt="" />
                <div className="deal-overlay">
                  <p className="country">USA</p>
                  <h5>New York City</h5>
                  <div className="ratings">
                    ★★★★★ <span>(12)</span>
                  </div>
                  <div className="price-row">
                    <strong>$140.00</strong> | 3 Days Tours
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="deal-card">
                <img src="./images/deal3.png" className="img-fluid" alt="" />
                <div className="deal-overlay">
                  <p className="country">Maldives</p>
                  <h5>Male City</h5>
                  <div className="ratings">
                    ★★★★★ <span>(12)</span>
                  </div>
                  <div className="price-row">
                    <strong>$140.00</strong> | 3 Days Tours
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="/" className="btn btn-tour mt-4">
            View All Deals
          </a>
        </div>
      </section>

      <FollowUsInstagram />
    </div>
  );
};
