import './Main.css';
import myphoto from './images/kockesbil.png';

function Home() {
  return (
    <div>
      <div className="main-content">
        <h1>Solar Water Solutions</h1>
        <p className='infotext'>Kox-Service är ett finskt företag specialiserat på installation och underhåll av moderna reningsverk för både privatpersoner och företag. Med över 15 års erfarenhet i branschen erbjuder vi skräddarsydda lösningar som säkerställer renare vatten och en hållbar framtid.</p>
        <img src={myphoto} alt="A description of the photo" className="main-image" />
      </div>
    </div>
  );
}

export default Home;