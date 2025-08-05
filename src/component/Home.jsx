import "../style/Home.css"
import Intern from "./Intern";

function Home(){
    return(
        <div>
            <div className="home-container">
                <div className="banner">
                    Basti Ki Pathshala Foundation​
                </div>
                <div className="poster">
                    Join us in our mission to break the barriers of education in underserved communities. With your support, we can provide quality education to children living in slum areas, empowering them with the knowledge and skills they need to build a brighter future. Together, let’s make a difference. Take action today and be a part of the change!
                </div>
                <button className="donate">Donate Now</button>
            </div>
            <Intern />
        </div>
    )
}

export default Home;