import './ObserCard.css'
import img from '../assets/image/obser bg.jpg'
function ObserCard() {
    return (
            <div className="obser">
                        <div className="ob-img">
          <img src={img} alt="" />
        </div>
                <div className="title"> Keck Observatory</div>
                <div className="content">
                    The Keck Observatory is one of the most important and advanced astronomy facilities in the world, renowned for its unparalleled technology and observing capabilities.</div>
                <div className="title">Paranal Observatory</div>
                <div className="content">
                    The Paranal Observatory is one of the most important and modern observatories in the Southern Hemisphere, famous for its powerful telescopes and advanced technology.</div>
                <div className="title">Arecibo Observatory</div>
                <div className="content">The Arecibo Observatory is one of the most famous radio observatories in the world, although it has been out of service since being severely damaged in 2020.</div>
                <div className="title">Lick Observatory</div>
                <div className="content">
                    Lick Observatory is one of the oldest and most important astronomical observatories in the United States, with a long history of studying astronomical phenomena.</div>
                <div className="title">Palomar Observatory</div>
                <div className="content">The Palomar Observatory, located in California, features a 200-inch (5.1 m) telescope, used to study the universe, distant objects, supernovae, and dark matter. Managed by the California Institute of Technology (Caltech), the station has made important contributions to astronomical discoveries since its completion in 1948.</div>
                <div className="title">Kitt Peak Observatory</div>
                <div className="content">Kitt Peak Observatory in Arizona, with more than 20 telescopes, including the 4-meter Mayall, studying the universe, dark matter, supernovae, exoplanets and the sun, is managed by NOIRLab and is a leading center for astronomical research.</div>
            
            </div>
    );
}

export default ObserCard;