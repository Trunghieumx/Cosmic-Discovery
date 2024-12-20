
import "./AreciboCard.css"
function AreciboCard() {
    return (
        <div className="arecibo-card">
            <div className="ob-container">
            </div>
            <div className="infor1">
                <div className="title">Location</div>
                <div className="content">
                    Arecibo City, Puerto Rico, a territory of the United States.</div>
                <div className="content">
                    Located in a natural valley, using the local terrain to support the structure of the telescope.</div>
                <div className="title">
                    Facilities</div>
                <div className="content">
                    Reflector dish diameter: 305 meters, was the world's largest radio telescope until 2016 </div>
            </div>
            <div className="infor2">
                <div className="title">
                    Objectives and research</div>
                <div className="content">
                    Observe radio sources such as quasars, pulsars, and distant galaxies.</div>
                <div className="content">
                    Support projects searching for signals from alien civilizations.</div>
            </div>
            <div className="infor3">
                <div className="title">
                    Crashes and outages</div>
                <div className="content">
                    In 2020, the cables supporting the signal receiver broke, causing serious damage.</div>
                <div className="content">
                    On December 1, 2020, the entire telescope structure collapsed completely.</div>

            </div>
            <div className="infor4">
                <div className="title">
                    Heritage</div>
                <div className="content">
                    Although no longer active, Arecibo remains a major icon in the fields of radio astronomy and planetary radar.</div>
            </div>
        </div>
    );
}

export default AreciboCard;