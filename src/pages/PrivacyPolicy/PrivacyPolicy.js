import "./PrivacyPolicy.css";
import http from "../../http";
import Loader from "../../component/Loader/Loader";
import { useEffect, useState } from "react";
export const PrivacyPolicy = () => {

    const [loading, setLoading] = useState(false);
    const [privacyPolicyDetails, setPrivacyPolicyDetails] = useState({});

    useEffect(() => {
        const fetchContactUsData = async () => {
            setLoading(true);
        try {
            const getresponse = await http.get("/get-privacy-policy-content");
            setPrivacyPolicyDetails(getresponse.data);
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
            {privacyPolicyDetails.data?.banner_image && (
                <img
                src={`${privacyPolicyDetails.image_url}/${privacyPolicyDetails.data.banner_image}`}
                className="img-fluid"
                alt=""
                />
            )}
        </div>

        <div className="cuisdjrwerwer py-5">
            <div className="container">
                <h1>{privacyPolicyDetails.data?.title &&
              privacyPolicyDetails.data.title}</h1>

                <hr style={{ background: "linear-gradient(45deg, var(--main-green-color), var(--blue-primary-color))", width: "5rem", paddingBottom: "5px", opacity: 1, borderRadius: "10px", borderTop: 0 }} />

                <div
                    dangerouslySetInnerHTML={{
                    __html:
                        privacyPolicyDetails.data?.description &&
                        privacyPolicyDetails.data.description,
                    }}
                />
            </div>
        </div>
      </div>
      </>
    )
}
