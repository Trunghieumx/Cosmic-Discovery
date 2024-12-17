import img from "../assets/image/bg.mp4"
import "./Background.css"
function Background() {
    return (
        <div className="container-video">
            <video
                width="100%"
                height="100%"
             
                autoPlay
                loop
                muted
            >
                <source src={img} type="video/mp4" />

            </video>

        </div>
    );
}

export default Background;