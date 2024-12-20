
import "./KeckCard.css"
function KeckCard() {
    return (
        <div className="keck-card">
            <div className="ob-container">

            </div>
            <div className="infor1">
                <div className="title">
                    Location</div>
                <div className="content">Mauna Kea peak, on the island of Hawaii, USA.</div>
                <div className="title">Research goals</div>
                <div className="content">Discovering extrasolar planets</div>
                <div className="title">Facilities</div>
                <div className="content">The Keck telescopes are housed in large domes.</div>
                <div className="content">
                Main mirror diameter: 10 meters, made up of 36 hexagonal mirrors assembled.</div>
            </div>
            <div className="infor2">
                <div className="title">Advanced technology</div>
                <div className="content">Adaptive optics help minimize the blurring effect caused by Earth's atmosphere.</div>
                <div className="content">Combining two telescopes via interferometry, creating higher resolution observations.</div>
            </div>
            <div className="infor3">
                <div className="title">
                Outstanding achievements</div>
                <div className="content">
                Discover and research extrasolar planetary systems.</div>
                <div className="content">
                Observe the movement of stars around the supermassive black hole at the center of the Milky Way.</div>
                <div className="content">
                Detailed study of galaxies in the early universe.</div>
            </div>
            <div className="infor4">
                <div className="title">
                Manage</div>
                <div className="content">
                The Keck Observatory is operated by the Keck Observatory Institute, an alliance between:</div>
                <div className="content">
                University of California (UC).</div>
                <div className="content">
                California Institute of Technology (Caltech).</div>
                <div className="content">NASA</div>
            </div>
        </div>
    );
}

export default KeckCard;