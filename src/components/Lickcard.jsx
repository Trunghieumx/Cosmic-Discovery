
import "./Lickcard.css"
function LickCard() {
    return (
        <div className="lick-card">
            <div className="ob-container">
            </div>
            <div className="infor1">
                <div className="title">Location</div>
                <div className="content">
                    The summit of Mount Hamilton, in the Diablo Range, near San Jose, California, USA.</div>
                <div className="content">
                    Altitude: 1,283 meters above sea level.</div>
                <div className="title">
                    History</div>
                <div className="content">Established: In 1888, funded by businessman James Lick.</div>
            </div>
            <div className="infor2">
                <div className="title">
                    Facilities</div>
                <div className="content">
                    Diameter: 36 inches (91 cm), largest in the world at the time of inauguration.</div>
                <div className="title">
                    Objectives and research</div>
                <div className="content">
                    Observe and study stars, star clusters, and galaxies.</div>
                <div className="content">
                    Study the formation and evolution of galaxies.</div>
            </div>
            <div className="infor3">
                <div className="title">
                    Outstanding achievements</div>
                <div className="content">
                    Analyze the movements of stars and galaxies, helping to strengthen the theory of the expansion of the universe.</div>
            </div>
            <div className="infor4">
                <div className="title">
                    Manage</div>
                <div className="content">
                    Now part of the University of California Observatory system, along with stations such as Keck in Hawaii.</div>

            </div>
        </div>
    );
}

export default LickCard;