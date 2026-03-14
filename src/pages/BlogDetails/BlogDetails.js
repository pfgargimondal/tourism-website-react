import { FollowUsInstagram } from "../../component/FollowUsInstagram/FollowUsInstagram";
import "./BlogDetails.css";
export const BlogDetails = () => {

    return (
      <div>
        <section class="hero-sectionc" style={{
                background: "url('../images/asd.png') center center / cover no-repeat"
            }}>
            <div class="container text-center hero-content">

                <h1 class="hero-title">Blog Details</h1>

                <p class="hero-description">
                    Book flights, trains, and buses easily with our trusted ticket booking service. <br/> Fast, secure, and hassle-free travel planning starts here.
                </p>
            </div>
        </section>
        
        <section class="blog-detail">
            <div class="container ">
                <div class="row">
                    <div class="col-lg-9">
                <div class="blog-main">
                    <div class="fghffsd5fd">
                        <img src="../images/swimming-pool-resort (1).jpg" alt="" />
                        <div class="fnsdjhf">
                            <button class="btn-sddf"><i class="fa-regular fa-calendar"></i> 29 August,2025 <i class="fa-solid fa-minus rotate-line"></i> Travel</button>
                        </div>
                    </div>
        

        
                    <h2 class="blog-title">
                        The Ultimate Southwest USA Road Trip Itinerary For Your Traveling
                    </h2>
        
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                        in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
                        passage, and going through the cites of the word in classical literature,
                        discovered the undoubtable source.
                    </p>
        
                    <p>
                        It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of letters, as opposed to using
                        'Content here, content here', making it look like readable English.
                    </p>
        
                    <h3 class="subtitel">
                        There Are Many Variations Of Passages Of Lorem Ipsum Available
                    </h3>
        
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority
                        have suffered alteration in some form, by injected humour, or randomised words
                        which don't look even slightly believable. If you are going to use a passage of
                        Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                        the middle of text.
                    </p>
                </div>
                        
                    </div>
                    <div class="col-lg-3">
                <div class="blog-sidepart">
        
                    <h3 class="sidepart-title">Related Blog</h3>
        
                    <div class="related-item">
                        <img src="../images/inspire1.png" alt="" />
                        <span class="categori">Inspiration</span>
                        <p>Our Main Inspire Runner With Autism Graces Of</p>
                    </div>
        
                    <div class="related-item">
                        <img src="../images/inspire4.png" alt="" />
                        <span class="categori">Inspiration</span>
                        <p>Our Main Inspire Runner With Autism Graces Of</p>
                    </div>
        
                    <div class="related-item">
                        <img src="../images/inspire4.png" alt="" />
                        <span class="categori">Inspiration</span>
                        <p>Our Main Inspire Runner With Autism Graces Of</p>
                    </div>
        
                    <div class="related-item">
                        <img src="../images/inspire4.png" alt="" />
                        <span class="categori">Inspiration</span>
                        <p>Our Main Inspire Runner With Autism Graces Of</p>
                    </div>
        
                </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="journey-section">
            <div class="container">
                <div class="section-heading">
                    <span class="sub-title">About Travel Agency</span>
                    <h2>Our Journey Memorable <br /> Adventures Worldwide</h2>
                </div>
        
                <div class="journey-grid">
                    <div class="left-card">
                        <img src="../images/inspire1.png" alt="" />
        
                        <div class="card-cont">
                            <span class="tag">Inspiration</span>
                            <h3>Our Main Inspire Runner With Autism Graces Of Women's Running</h3>
                            <p>
                                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                                Eiusmod Excepteur Sint Occaecat Cupidatat Non Proident. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                                Eiusmod Excepteur Sint Occaecat Cupidatat Non Proident.
                            </p>
        
                            <div class="author-row">
                                <div class="author">
                                    <img src="../images/author.png" alt="" />
                                    <span>David Rocos</span>
                                </div>
        
                                <button class="btn-tour">Read More...</button>
                            </div>
                        </div>
                    </div>
        
                    <div class="right-cards">
        
                        <div class="ins-card">
                            <img src="../images/inspire2.png" alt="" />
                            <span class="tag">Inspiration</span>
                            <h4>Our Main Inspire Runner With Autism Graces Of</h4>
                        </div>
        
                        <div class="ins-card">
                            <img src="../images/inspire3.png" alt="" />
                            <span class="tag">Inspiration</span>
                            <h4>Our Main Inspire Runner With Autism Graces Of</h4>
                        </div>
        
                        <div class="ins-card">
                            <img src="../images/inspire4.png" alt="" />
                            <span class="tag">Inspiration</span>
                            <h4>Our Main Inspire Runner With Autism Graces Of</h4>
                        </div>
        
                        <div class="ins-card">
                            <img src="../images/inspire5.png" alt="" />
                            <span class="tag">Inspiration</span>
                            <h4>Our Main Inspire Runner With Autism Graces Of</h4>
                        </div>
        
                    </div>
        
                </div>
            </div>
        </section>


        <FollowUsInstagram />
      </div>
    )
}
