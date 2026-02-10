// import './App.css';

import Section from './components/Section';

//? Paintings
// import PaintingList from './components/PaintingList';
// import paintings from './json/paintings.json';

//? Planes
import planes from './json/planes.json';
// import PlanesList from './components/PlanesList';
// import PlanesList from './components/PlanesListWOSyle';  //! без стилізації
import PlanesList from './components/PlanesListBuiltInStyles'; //! вбудовані стилі built-in styles



export default function App() {
  return (
    <>
      {/* //? Paintings */}
      {/* <Section title="Колекція картин">
        <PaintingList items={paintings} />
      </Section > */}

      {/* //? Planes */}
      <Section title="Колекція моделей літаків">
        <PlanesList items={planes} />
      </Section >
    </>
  );
};
