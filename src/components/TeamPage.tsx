import "./../assets/styles/App.css";
import img1 from "./../assets/images/photo1.png";
import img2 from "./../assets/images/photo2.png";
import img3 from "./../assets/images/photo3.png";
import img4 from "./../assets/images/photo4.png";
import img5 from "./../assets/images/photo5.png";
import img6 from "./../assets/images/photo6.png";

import "@fontsource/poppins";
import "@fontsource/montserrat";

const TeamPage = () => {
  return (
    <div className="body">
      <section className="row sectiontitle">
        <div className="col-md-2"></div>
        <div className="col-sm-12 col-md-4 col-xs-12">
          <h1 className="title">
            <strong>The creative crew</strong>
          </h1>
        </div>
        <div className="col-sm-12 col-md-4 col-xs-12">
          <h1 className="subtitle">WHO WE ARE</h1>
          <p className="textTitle">
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
          </p>
        </div>
        <div className="col-md-2"></div>
      </section>
      <section className="row">
        <div className="col-md-3 white"></div>
        <div className="col-md-6 col-sm-12 col-xs-12 myteam">
          <div className="divImg columna1m">
            <div className="izquierdo">
              <img className="profile" src={img1} alt="" />
              <p className="name"> Bill Mahoney</p>
            </div>
            <div className="derecho">
              <p className="position">Product owner</p>
            </div>
          </div>
          <div className="divImg columna2 columna2m">
            <div className="izquierdo">
              <img className="profile" src={img2} alt="" />
              <p className="name">Saba Cabrera</p>
            </div>
            <div className="derecho">
              <p className="position">art director</p>
            </div>
          </div>
          <div className="divImg columna1m">
            <div className="izquierdo">
              <img className="profile" src={img3} alt="" />
              <p className="name">Shae Le</p>
            </div>
            <div className="derecho">
              <p className="position">Tech Lead</p>
            </div>
          </div>
          <div className="divImg columna2m">
            <div className="izquierdo">
              <img className="profile" src={img4} alt="" />
              <p className="name">Skylah Lu</p>
            </div>
            <div className="derecho">
              <p className="position">UX Designer</p>
            </div>
          </div>
          <div className="divImg columna2 columna1m">
            <div className="izquierdo">
              <img className="profile" src={img5} alt="" />
              <p className="name">Griff Richards</p>
            </div>
            <div className="derecho">
              <p className="position">Developer</p>
            </div>
          </div>
          <div className="divImg columna2m">
            <div className="izquierdo">
              <img className="profile" src={img6} alt="" />
              <p className="name">Stan John</p>
            </div>
            <div className="derecho">
              <p className="position">Stan John</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 white"></div>
      </section>
      <section>
        <div className="beforeFooter"></div>
        <footer>
          <label htmlFor="" className="labelFooter">
            create by <strong>Ovalencia</strong> - devChallenges.io
          </label>
        </footer>
      </section>
    </div>
  );
};

TeamPage.propTypes = {};

export default TeamPage;
