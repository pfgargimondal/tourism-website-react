import { FollowUsInstagram } from "../../component/FollowUsInstagram/FollowUsInstagram";
import "./Blog.css";
export const Blog = () => {
  return (
    <div>
      <section className="hero-sections" style={{
            background: "url('./images/tourist-carrying-luggage.jpg') center center / cover no-repeat"
        }}>
        <div className="container text-center hero-content">
          <h1 className="hero-title">Blog</h1>

          <p className="hero-description">
            Book flights, trains, and buses easily with our trusted ticket
            booking service. Fast, secure, and hassle-free travel planning
            starts here.
          </p>
        </div>
      </section>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="blog-card">
                  <img src="./images/blogimg1.png" className="img-fluid" alt=""/>
                  <div className="blog-content">
                    <div className="meta">
                      <span>29 August, 2025</span>
                      <span className="badge bg-light text-success">Travel</span>
                    </div>
                    <h5>
                      The Ultimate Southwest USA Road Trip Itinerary For Your
                      Traveling
                    </h5>
                    <p>
                      We offer carefully curated destinations and tours that
                      capture the true essence.
                    </p>
                    <a href="/" className="read-btn">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="blog-card">
                  <img src="./images/blogimg2.png" className="img-fluid" alt=""/>
                  <div className="blog-content">
                    <div className="meta">
                      <span>29 August, 2025</span>
                      <span className="badge bg-light text-success">Travel</span>
                    </div>
                    <h5>
                      How Can You Traveling In London, United Kingdom From Italy
                    </h5>
                    <p>
                      We offer carefully curated destinations and tours that
                      capture the true essence.
                    </p>
                    <a href="/" className="read-btn">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="blog-card">
                  <img src="./images/blogimg3.png" className="img-fluid" alt=""/>
                  <div className="blog-content">
                    <div className="meta">
                      <span>29 August, 2025</span>
                      <span className="badge bg-light text-success">Travel</span>
                    </div>
                    <h5>
                      The Top 10 Places To Traveling In The World With Your
                      Family
                    </h5>
                    <p>
                      We offer carefully curated destinations and tours that
                      capture the true essence.
                    </p>
                    <a href="/" className="read-btn">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="blog-card">
                  <img src="./images/blogimg4.png" className="img-fluid" alt=""/>
                  <div className="blog-content">
                    <div className="meta">
                      <span>29 August, 2025</span>
                      <span className="badge bg-light text-success">Travel</span>
                    </div>
                    <h5>
                      The Top 10 Places To Traveling In The World With Your
                      Family
                    </h5>
                    <p>
                      We offer carefully curated destinations and tours that
                      capture the true essence.
                    </p>
                    <a href="/" className="read-btn">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="blog-card">
                  <img src="./images/blogimg5.png" className="img-fluid" alt=""/>
                  <div className="blog-content">
                    <div className="meta">
                      <span>29 August, 2025</span>
                      <span className="badge bg-light text-success">Travel</span>
                    </div>
                    <h5>
                      The Top 10 Places To Traveling In The World With Your
                      Family
                    </h5>
                    <p>
                      We offer carefully curated destinations and tours that
                      capture the true essence.
                    </p>
                    <a href="/" className="read-btn">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="blog-card">
                  <img src="./images/blogimg6.png" className="img-fluid" alt=""/>
                  <div className="blog-content">
                    <div className="meta">
                      <span>29 August, 2025</span>
                      <span className="badge bg-light text-success">Travel</span>
                    </div>
                    <h5>
                      The Top 10 Places To Traveling In The World With Your
                      Family
                    </h5>
                    <p>
                      We offer carefully curated destinations and tours that
                      capture the true essence.
                    </p>
                    <a href="/" className="read-btn">
                      Read More →{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="sidebar">
              <div className="sidebar-box">
                <h6>Search Here</h6>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Your Keyword Here"
                  />
                  <button className="btn btn-tour">Search Now</button>
                </div>
              </div>

              <div className="category-box">
                <h6>All Categories</h6>
                <ul className="list-group">
                  <li className="list-group-item btn-tour">All</li>
                  <li className="list-group-item btn-tour">Featured</li>
                  <li className="list-group-item btn-tour">Sliders</li>
                  <li className="list-group-item active btn-tour">
                    Manage Listings
                  </li>
                  <li className="list-group-item btn-tour">Address & Map</li>
                  <li className="list-group-item btn-tour">Reservation Requests</li>
                  <li className="list-group-item btn-tour">Your Reservation</li>
                  <li className="list-group-item btn-tour">Search Results</li>
                </ul>
              </div>

              <div className="sidebar-box1">
                <div className="d-flex mb-3">
                  <button className="btn btn-tour me-2">Popular</button>
                  <button className="btn1 btn-outline-secondary">Recent</button>
                </div>

                <div className="mini-post">
                  <img src="./images/smallimg1.png" alt=""/>
                  <div>
                    <h6>An Incredibly Easy Method That Works For All</h6>
                    <small className="ggd55">25-02-2024</small>
                  </div>
                </div>

                <div className="mini-post">
                  <img src="./images/smallimg2.png" alt=""/>
                  <div>
                    <h6>An Incredibly Easy Method That Works For All</h6>
                    <small className="ggd55">25-02-2024</small>
                  </div>
                </div>

                <div className="mini-post">
                  <img src="./images/smallimg3.png" alt=""/>
                  <div>
                    <h6>An Incredibly Easy Method That Works For All</h6>
                    <small className="ggd55">25-02-2024</small>
                  </div>
                </div>

                <div className="mini-post">
                  <img src="./images/smallimg4.png" alt=""/>
                  <div>
                    <h6>An Incredibly Easy Method That Works For All</h6>
                    <small className="ggd55">25-02-2024</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="journey-section">
        <div className="container">
          <div className="section-heading">
            <span className="sub-title">About Travel Agency</span>
            <h2>
              Our Journey Memorable <br /> Adventures Worldwide
            </h2>
          </div>

          <div className="journey-grid">
            <div className="left-card">
              <img src="images/inspire1.png" alt="" />

              <div className="card-cont">
                <span className="tag">Inspiration</span>
                <h3>
                  Our Main Inspire Runner With Autism Graces Of Women's Running
                </h3>
                <p>
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed
                  Do Eiusmod Excepteur Sint Occaecat Cupidatat Non Proident.
                </p>

                <div className="author-row">
                  <div className="author">
                    <img src="./images/author.png" alt="" />
                    <span>David Rocos</span>
                  </div>

                  <button className="btn-tour">Read More...</button>
                </div>
              </div>
            </div>

            <div className="right-cards">
              <div className="ins-card">
                <img src="images/inspire2.png" alt="" />
                <span className="tag">Inspiration</span>
                <h4>Our Main Inspire Runner With Autism Graces Of</h4>
              </div>

              <div className="ins-card">
                <img src="images/inspire3.png" alt="" />
                <span className="tag">Inspiration</span>
                <h4>Our Main Inspire Runner With Autism Graces Of</h4>
              </div>

              <div className="ins-card">
                <img src="images/inspire4.png" alt="" />
                <span className="tag">Inspiration</span>
                <h4>Our Main Inspire Runner With Autism Graces Of</h4>
              </div>

              <div className="ins-card">
                <img src="images/inspire5.png" alt="" />
                <span className="tag">Inspiration</span>
                <h4>Our Main Inspire Runner With Autism Graces Of</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FollowUsInstagram />
    </div>
  );
};
