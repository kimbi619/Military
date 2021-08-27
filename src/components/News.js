import mainNews from '../img/specna.jpg'
import LattestNewsTop from './LattestNewsTop'
import GalaryOne from './GalaryOne'
import girl from '../img/girlTestimonial.jpg';
import ship from '../img/ship.jpg';
import drone from '../img/drone.jpg';
import bike from '../img/bike.jpg';
import './News.css'

const News = () => {
    return (
        <div>
            {/* <div className="newsLandingWrapper">
                <div className="advertMain" >
                    <div className="dark"></div>
                    <img src={mainNews} className="mainImg" alt="mainImg" />
                    <h1>Alcatraz attack on the US Navy was a success</h1>
                    <button id="readmore">Read More</button>
                </div>
                <div className="wrapper">
                    <LattestNewsTop />
                    <LattestNewsTop />
                    <LattestNewsTop />
                    <LattestNewsTop />
                </div>
            </div> */}
            
            <div className="galaryOne">
                <GalaryOne />
                <GalaryOne />
                <GalaryOne />
            </div>
            <div className="story">
                <div className="imgWrapper">
                    <img src={girl} alt="news One" />
                </div>
                <div className="desc">
                    <h2>My story</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, 
                        voluptas! Maxime, quam aut! Sunt, voluptatibus possimus. Voluptate, odio
                         pariatur doloribus quod animi iste consequatur natus perspiciatis nostrum iusto 
                         praesentium omnis dolor eos quas consectetur. 
                        Autem nemo nulla ad dignissimos quae
                    </p>
                </div>
            </div>
            .
            <div className="galleryLast">
                <div className="galleryItem">
                    <div className="imgWrapper">
                        <img src={ship} alt="news One" />
                    </div>
                    <div className="desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="galleryItem">
                    <div className="imgWrapper">
                        <img src={drone} alt="news One" />
                    </div>
                    <div className="desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="galleryItem">
                    <div className="imgWrapper">
                        <img src={bike} alt="news One" />
                    </div>
                    <div className="desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default News
