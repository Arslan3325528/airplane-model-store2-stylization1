import './App.css';

import Section from './components/Section';

//? Paintings
import PaintingList from './components/PaintingList';
import paintings from './json/paintings.json';

//? Planes
import PlanesList from './components/PlanesList';
import planes from './json/planes.json';


export default function App() {
  return (
    <>
      {/* //? Paintings */}
      <Section title="Колекція картин">
        <PaintingList items={paintings} />
      </Section >

      {/* //? Planes */}
      <Section title="Колекція моделей літаків">
        <PlanesList items={planes} />
      </Section >
    </>
  );
};
