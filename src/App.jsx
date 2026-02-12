import './App.css'; //! Ванільний CSS (Vanilla CSS)

// import Section from './components/SectionWOSyle';  //! без стилізації
// import Section from './components/SectionBuiltInStyles'; //! вбудовані стилі
import Section from './components/SectionVanillaCSS'; //! ванільний CSS 

//? Paintings
// import PaintingList from './components/PaintingList';
// import paintings from './json/paintings.json';

//? Planes
import planes from './json/planes.json';

// import PlanesList from './components/PlanesListWOSyle';  //! без стилізації
// import PlanesList from './components/PlanesListBuiltInStyles'; //! вбудовані стилі 
import PlanesList from './components/PlanesListVanillaCSS'; //! ванільний CSS 


export default function App() {
  return (
    <>
      {/* //? Paintings */}
      {/* <Section title="Колекція картин">
        <PaintingList items={paintings} />
      </Section > */}

      {/* //? Planes */}
      <Section title="Магазин моделей літаків">
        <PlanesList items={planes} />
      </Section >
    </>
  );
};
