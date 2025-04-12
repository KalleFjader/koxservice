import myphoto from './images/placeholder.png';

function About() {
    return (
      <div>
        <h1>Om oss</h1>
        <p>Kox-Service är ett finskt företag specialiserat på installation och underhåll av moderna reningsverk för både privatpersoner och företag. Med över 15 års erfarenhet i branschen erbjuder vi skräddarsydda lösningar som säkerställer renare vatten och en hållbar framtid.</p>
        <div>
          <img src={myphoto} alt="Bild på tidigare arbete!" className="placeholder-image" />
          <img src={myphoto} alt="Bild på tidigare arbete!" className="placeholder-image" />
          <img src={myphoto} alt="Bild på tidigare arbete!" className="placeholder-image" />
        </div>
      
      </div>

    );
  }
  
  export default About;