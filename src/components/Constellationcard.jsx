import "./Constellation.css";
import img from "../assets/image/constellation.png";
function Constellationcard() {
  return (
    <>
      <div className="constellation">
        <div className="con-img">
          <img src={img} alt="" />
        </div>
        <div className="title">Constellation</div>
        <div className="content">
          A constellation is a collection of stars in the sky that from Earth
          are joined into imaginary shapes, often based on mythological
          characters, animals or objects. Currently, the International
          Astronomical Union (IAU) recognizes 88 official constellations,
          divided evenly throughout the sky.
        </div>
        <div className="title">How to form constellations?</div>
        <div className="content">
          Constellations are not groups of stars physically related to each
          other in space, but are symbolic arrangements created by humans since
          ancient times. Ancient people observed the night sky to navigate,
          predict seasons, and create stories related to the star groups they
          saw. For example: The constellation Orion is associated with hunters
          in Greek mythology. The constellation Ursa Major (Great Bear) is
          popular in many cultures.
        </div>
        <div className="title">Comets</div>
        <div className="content">
          Comets are small celestial bodies in the Solar System, made mainly of
          ice, dust, gas, and organic matter. As they approach the Sun, the ice
          in comets evaporates and creates a characteristic bright tail, helping
          them stand out and be seen from Earth.
        </div>
        <div className="title">How do comets form?</div>
        <div className="content">
          Comets form from dust, rock and ice in cold regions far from the Sun,
          such as the Oort Cloud or the Kuiper Belt, through the accumulation of
          material. When pulled by gravity into orbit near the Sun, the ice
          sublimates to form gas clouds and bright tails.
        </div>
      </div>
    </>
  );
}

export default Constellationcard;
