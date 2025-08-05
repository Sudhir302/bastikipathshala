import "../style/Certificate.css"

function Certificate(){
    return(
        <div className="certificate-container">
            <div className="certificate-head">
                <img src="/group.jpg" alt="Group Img" />
                <strong>OUR CERTIFICATE</strong>
            </div>
            <div className="certificate-body">
                <div className="certificate-content">
                    <strong>
                    Indian Society Registration Certificate
                    </strong> <br /><br />
                    <span>
                    We take immense pride in our registration under the Indian Societies Act of 1860, a symbol of our unwavering dedication to transparency and accountability. This registration underscores our steadfast commitment to catalyzing positive change and fostering gender equity in society. As a registered nonprofit entity, we adhere rigorously to principles of integrity and professionalism, recognizing the profound responsibility entrusted to us. Our certification from the government stands as a testament to our ethos, and we remain resolute in upholding the core values of the Basti Ki Pathshala Foundation. In our ongoing pursuit to empower women and advance a more inclusive world, we cherish this recognition and remain steadfast in our mission.
                    </span><br />
                </div>
                <img src="/certificate.png" alt="Certificate" />
            </div>
        </div>
    )
}

export default Certificate;