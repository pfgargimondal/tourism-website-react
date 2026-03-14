import "./HotelFilter.css";
import { FollowUsInstagram } from "../../component/FollowUsInstagram/FollowUsInstagram";
export const HotelFilter = () => {
  return (
    <div>
      <section class="hero-sectionw" style={{
            background: "url('../images/view-luxurious-hotel-interior-space.jpg') center center / cover no-repeat"
        }}>
        <div class="container text-center hero-content">
          <h1 class="hero-title">Hotel</h1>

          <p class="hero-description">
            Book flights, trains, and buses easily with our trusted ticket
            booking service. <br /> Fast, secure, and hassle-free travel
            planning starts here.
          </p>
        </div>
      </section>
      <section class="hotel-search-section py-4">
        <div class="container">
          <div class="hotel-search-box">
            <form class="row align-items-end g-3">
              <div class="col-lg-2 col-6">
                <label class="form-label">Where</label>
                <input
                  type="text"
                  class="form-control custom-input"
                  placeholder="Delhi"
                />
              </div>

              <div class="col-lg-2 col-6">
                <label class="form-label">When</label>
                <input type="date" class="form-control custom-input" />
              </div>

              <div class="col-lg-2 col-6">
                <label class="form-label">Date</label>
                <input type="date" class="form-control custom-input" />
              </div>

              <div class="col-lg-2 col-6">
                <label class="form-label">Category</label>
                <select class="form-select custom-input">
                  <option>1 Star</option>
                  <option>2 Star</option>
                  <option>3 Star</option>
                  <option>4 Star</option>
                  <option>5 Star</option>
                </select>
              </div>

              <div class="col-lg-2 col-6">
                <label class="form-label">Room</label>
                <select class="form-select custom-input">
                  <option>2 Adults, 1 Room</option>
                  <option>2 Adults, 2 Rooms</option>
                  <option>3 Adults, 1 Room</option>
                </select>
              </div>

              <div class="col-lg-2 col-6">
                <button type="submit" class="btn-tour w-100">
                  Search Hotel
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- ================= HOTEL TYPE SECTION ================= --> */}
      <section class="hotel-category-section py-5">
        <div class="container">
          <h4 class="hotel-category-title mb-4">
            Choose type of Hotels you are interested
          </h4>

          <div class="row g-4 align-items-center">
            <div class="col-lg-1 d-none d-lg-block"></div>

            <div class="col-lg-2 col-6">
              <div class="hotel-category-item">
                <img href="" 
                  src="./images/condos.jpg"
                  class="hotel-category-img"
                  alt=""
                />
                <div class="hotel-category-text">
                  <h6>Condos</h6>
                  <p>216 Hotels</p>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-6">
              <div class="hotel-category-item">
                <img href="" 
                  src="./images/apartments.jpg"
                  class="hotel-category-img"
                  alt=""
                />
                <div class="hotel-category-text">
                  <h6>Apartments</h6>
                  <p>569 Hotels</p>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-6">
              <div class="hotel-category-item">
                <img href="" 
                  src="./images/villas.jpg"
                  class="hotel-category-img"
                  alt=""
                />
                <div class="hotel-category-text">
                  <h6>Villas</h6>
                  <p>129 Hotels</p>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-6">
              <div class="hotel-category-item">
                <img href="" 
                  src="./images/5 star hotels.jpg"
                  class="hotel-category-img"
                  alt=""
                />
                <div class="hotel-category-text">
                  <h6>5 Star Hotels</h6>
                  <p>600 Hotels</p>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-6">
              <div class="hotel-category-item">
                <img href="" 
                  src="./images/3 star hotels.jpg"
                  class="hotel-category-img"
                  alt=""
                />
                <div class="hotel-category-text">
                  <h6>3 Star Hotels</h6>
                  <p>200 Hotels</p>
                </div>
              </div>
            </div>

            <div class="col-lg-1 d-none d-lg-block"></div>
          </div>
        </div>
      </section>
      {/* <!-- ================= HOTEL LISTING SECTION ================= --> */}
      <section class="hotel-listing-section py-5">
        <div class="container">
          <div class="row g-4">
            {/* <!-- ================= FILTER SIDEBAR ================= --> */}
            <div class="col-lg-3">
              <div class="filter-card sticky-top">
                <div class="filter-header d-flex justify-content-between align-items-center">
                  <h5>Filters</h5>
                  <a href="/" class="reset-link">
                    Reset
                  </a>
                </div>

                <div class="filter-section">
                  <label class="filter-label">Search by Hotel Names</label>
                  <div class="search-box">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Hotel Name"
                    />
                  </div>
                </div>

                <div class="flight-filter-box">
                  <div class="flight-filter-header d-flex justify-content-between align-items-center flight-filter-toggle">
                    <div class="flight-filter-left">
                      <img 
                        src="./images/upplane.png"
                        class="flight-filter-img"
                        alt=""
                      />
                      <span class="flight-filter-title">Hotel Types</span>
                    </div>

                    <i class="fa-solid fa-caret-up flight-filter-icon"></i>
                  </div>

                  <div class="flight-filter-content">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="hotel1"
                      />
                      <label class="form-check-label" for="hotel1">
                        Hotels
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="hotel2"
                      />
                      <label class="form-check-label" for="hotel2">
                        Aparthotel
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="hotel3"
                      />
                      <label class="form-check-label" for="hotel3">
                        Villa
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="hotel4"
                      />
                      <label class="form-check-label" for="hotel4">
                        Apartment
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="hotel5"
                      />
                      <label class="form-check-label" for="hotel5">
                        Private Vacation Home
                      </label>
                    </div>
                  </div>
                </div>

                <div class="hotel-price-filter">
                  <div class="hotel-price-header">
                    <h3>Price Range</h3>
                  </div>

                  <div class="hotel-price-inputs">
                    <div class="hotel-price-field">
                      <input
                        type="number"
                        class="hotel-min-input"
                        value="2500"
                      />
                    </div>

                    <div class="hotel-price-separator">-</div>

                    <div class="hotel-price-field">
                      <input
                        type="number"
                        class="hotel-max-input"
                        value="7500"
                      />
                    </div>
                  </div>

                  <div class="hotel-price-slider">
                    <div class="hotel-price-progress"></div>
                  </div>

                  <div class="hotel-range-inputs">
                    <input
                      type="range"
                      class="hotel-range-min"
                      min="0"
                      max="10000"
                      value="2500"
                      step="100"
                    />
                    <input
                      type="range"
                      class="hotel-range-max"
                      min="0"
                      max="10000"
                      value="7500"
                      step="100"
                    />
                  </div>
                </div>

                <div class="flight-review-filter-box">
                  <div class="flight-review-filter-header d-flex justify-content-between align-items-center flight-review-toggle">
                    <div class="flight-review-left">
                      <img 
                        src="./images/reviewicon.png"
                        class="flight-review-img"
                        alt=""
                      />
                      <span class="flight-review-title">Reviews</span>
                    </div>

                    <i class="fa-solid fa-caret-up flight-review-icon"></i>
                  </div>

                  <div class="flight-review-content">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" />
                      <label class="form-check-label">⭐⭐⭐⭐⭐ 5 Star</label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" />
                      <label class="form-check-label">⭐⭐⭐⭐ 4 Star</label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" />
                      <label class="form-check-label">⭐⭐⭐ 3 Star</label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" />
                      <label class="form-check-label">⭐⭐ 2 Star</label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" />
                      <label class="form-check-label">⭐ 1 Star</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-9">
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="hotel-card">
                    <img  
                      src="./images/hotel1.png"
                      class="img-fluid hotel-img"
                      alt=""
                    />
                    <div class="hotel-content">
                      <div class="d-flex justify-content-between">
                        <h5>Planet Hollywood Beach Resort</h5>
                        <span class="rating">5.0</span>
                      </div>
                      <div class="fyffffd5f">
                        <p class="location">Mumbai</p>
                      </div>

                      <div class="d-flex justify-content-between align-items-center">
                        <a href="/" class="booknb">
                          Book Now ↗
                        </a>
                        <h4 class="price">₹42,120</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="hotel-card">
                    <img 
                      src="./images/hotel3.png"
                      class="img-fluid hotel-img"
                      alt=""
                    />
                    <div class="hotel-content">
                      <div class="d-flex justify-content-between">
                        <h5>Luxury Grand Palace</h5>
                        <span class="rating">5.0</span>
                      </div>
                      <div class="fyffffd5f">
                        <p class="location">Kolkata</p>
                      </div>

                      <div class="d-flex justify-content-between align-items-center">
                        <a href="/" class="booknb">
                          Book Now ↗
                        </a>
                        <h4 class="price">₹45,120</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="hotel-card">
                    <img  
                      src="./images/hotel4.jpg"
                      class="img-fluid hotel-img"
                      alt=""
                    />
                    <div class="hotel-content">
                      <div class="d-flex justify-content-between">
                        <h5>Sunset Heritage Resort</h5>
                        <span class="rating">5.0</span>
                      </div>
                      <div class="fyffffd5f">
                        <p class="location">Kochi</p>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <a href="/" class="booknb">
                          Book Now ↗
                        </a>
                        <h4 class="price">₹50,120</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="hotel-card">
                    <img 
                      src="./images/hotel5.jpg"
                      class="img-fluid hotel-img"
                      alt=""
                    />
                    <div class="hotel-content">
                      <div class="d-flex justify-content-between">
                        <h5>Royal Crown Residency</h5>
                        <span class="rating">5.0</span>
                      </div>
                      <div class="fyffffd5f">
                        <p class="location">Delhi</p>
                      </div>

                      <div class="d-flex justify-content-between align-items-center">
                        <a href="/" class="booknb">
                          Book Now ↗
                        </a>
                        <h4 class="price">₹61,950</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="hotel-card">
                    <img 
                      src="./images/hotel6.png"
                      class="img-fluid hotel-img"
                      alt=""
                    />
                    <div class="hotel-content">
                      <div class="d-flex justify-content-between">
                        <h5>Emerald Bay Suites</h5>
                        <span class="rating">5.0</span>
                      </div>
                      <div class="fyffffd5f">
                        <p class="location">Chennai</p>
                      </div>

                      <div class="d-flex justify-content-between align-items-center">
                        <a href="/" class="booknb">
                          Book Now ↗
                        </a>
                        <h4 class="price">₹51,950</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="hotel-card">
                    <img  
                      src="./images/hotel1.png"
                      class="img-fluid hotel-img"
                      alt=""
                    />
                    <div class="hotel-content">
                      <div class="d-flex justify-content-between">
                        <h5>Ocean Breeze Retreat</h5>
                        <span class="rating">5.0</span>
                      </div>

                      <div class="fyffffd5f">
                        <p class="location">Pondicherry</p>
                      </div>

                      <div class="d-flex justify-content-between align-items-center">
                        <a href="/" class="booknb">
                          Book Now ↗
                        </a>
                        <h4 class="price">₹45,120</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="hotel-card">
                    <img 
                      src="./images/hotel4.jpg"
                      class="img-fluid hotel-img"
                      alt=""
                    />
                    <div class="hotel-content">
                      <div class="d-flex justify-content-between">
                        <h5>Hilltop Paradise Hotel</h5>
                        <span class="rating">5.0</span>
                      </div>
                      <div class="fyffffd5f">
                        <p class="location">Shimla</p>
                      </div>

                      <div class="d-flex justify-content-between align-items-center">
                        <a href="/" class="booknb">
                          Book Now ↗
                        </a>
                        <h4 class="price">₹50,120</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="hotel-card">
                    <img 
                      src="./images/hotel2.png"
                      class="img-fluid hotel-img"
                      alt=""
                    />
                    <div class="hotel-content">
                      <div class="d-flex justify-content-between">
                        <h5>Golden Sands Resort</h5>
                        <span class="rating">5.0</span>
                      </div>
                      <div class="fyffffd5f">
                        <p class="location">Udaipur</p>
                      </div>

                      <div class="d-flex justify-content-between align-items-center">
                        <a href="/" class="booknb">
                          Book Now ↗
                        </a>
                        <h4 class="price">₹61,950</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="hotel-card">
                    <img
                      src="./images/hotel5.jpg"
                      class="img-fluid hotel-img"
                      alt=""
                    />
                    <div class="hotel-content">
                      <div class="d-flex justify-content-between">
                        <h5>Urban Luxe Stay</h5>
                        <span class="rating">5.0</span>
                      </div>
                      <div class="fyffffd5f">
                        <p class="location">Bangalore</p>
                      </div>

                      <div class="d-flex justify-content-between align-items-center">
                        <a href="/" class="booknb">
                          Book Now ↗
                        </a>
                        <h4 class="price">₹51,950</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FollowUsInstagram />
    </div>
  );
};
