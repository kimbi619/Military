import mainNews from '../img/specna.jpg'
import LattestNewsTop from './LattestNewsTop'

const News = () => {
    return (
        <div className="newsLandingWrapper">
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
        </div>
    )
}

export default News
