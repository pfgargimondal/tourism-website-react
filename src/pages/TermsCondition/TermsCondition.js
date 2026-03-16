import "./TermsCondition.css";
import http from "../../http";
import Loader from "../../component/Loader/Loader";
import { useEffect, useState } from "react";
export const TermsCondition = () => {

    const [loading, setLoading] = useState(false);
    const [termsConditionDetails, setTermsConditionDetails] = useState({});

    useEffect(() => {
        const fetchContactUsData = async () => {
            setLoading(true);
        try {
            const getresponse = await http.get("/get-terms-condition-content");
            setTermsConditionDetails(getresponse.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
        };

        fetchContactUsData();
    }, []);
 
    return (
      <>
        {loading && <Loader/>}
        
      <div className="legal-pages-wrapper">
        <div className="diwenrwer">
            {termsConditionDetails.data?.banner_image && (
                <img
                src={`${termsConditionDetails.image_url}/${termsConditionDetails.data.banner_image}`}
                className="img-fluid"
                alt=""
                />
            )}
        </div>

        <div className="cuisdjrwerwer py-5">
            <div className="container">
                <h1>{termsConditionDetails.data?.title &&
              termsConditionDetails.data.title}</h1>

                <hr style={{ background: "linear-gradient(45deg, var(--main-green-color), var(--blue-primary-color))", width: "5rem", paddingBottom: "5px", opacity: 1, borderRadius: "10px", borderTop: 0 }} />

                <div
                    dangerouslySetInnerHTML={{
                    __html:
                        termsConditionDetails.data?.description &&
                        termsConditionDetails.data.description,
                    }}
                />
            </div>
        </div>
      </div>
      </>
    )
}
