import galaryImg from '../img/specna_grid.jpg';

const GalaryOne = () => {
    return (
        <div>
            <div className="imgWrapper">
                <img src={galaryImg} alt="news One" />
            </div>
            <div className="desc">
                <p>ALCATRAZ attack on US Navy was a success</p>
            </div>
        </div>
    )
}

export default GalaryOne
