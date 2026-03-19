import { useEffect, useState } from "react";
import Loader from "../../component/Loader/Loader";
import http from "../../http";

export const Testimonial = () => {

    
    const [loading, setLoading] = useState(false);
    const [testimonialDetails, setTestimonialDetails] = useState({});

    useEffect(() => {
        const fetchTestimonialData = async () => {
            setLoading(true);
            try {
                const getresponse = await http.get("/get-testimonial-content");
                setTestimonialDetails(getresponse.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchTestimonialData();
    }, []);

    return (
      <div>
        {loading && <Loader/>}
        <section className="testimonial mt-5" style={{
                background: `url(${testimonialDetails.image_url}/${testimonialDetails.data?.image}) center / cover no-repeat`
            }}>
            <div className="container contentrgdfg">
                <div className="row align-items-center">
                    <div className="col-lg-5 text-start">
                        <div className="subtitle">{testimonialDetails.data?.heading}</div>
                        {/* <h2>Good Reviews By <span style={{ color: "#19a7a0"}}>Clients</span></h2> */}
                        <h2>{testimonialDetails.data?.title}</h2>
                        <div className="mt-3" style={{ color: "#ccc"}}
                            dangerouslySetInnerHTML={{
                            __html: testimonialDetails.data?.description && (testimonialDetails.data.description),
                            }}
                        />
                    </div>

                    {testimonialDetails.data?.testimonalContent.map((testimonials, index) => (
                        <div className="col-lg-7">
                            <div className="quote">
                                <img src="./images/quote_icon.png" alt=""/>
                                <i> {testimonials.description} </i>
                            </div>
                            <div className="client">
                                <div className="img">
                                    <img src={`${testimonialDetails.image_url}/${testimonials.image}`} alt=""/>
                                </div>
                                <div className="text">
                                    {testimonials.name}<br/><small style={{ color: "#bbb"}}>{testimonials.designation}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
      </div>
    )
}
