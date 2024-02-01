// App.jsx
import React, { useState } from 'react';
import Header from './Header';
import MyCard from './MyCard';
import Tags from './Tags';
import Footer from './Footer';
import './App.css';

const App = () => {
  const [adopted, setAdopted] = useState(Array(4).fill(false));

  const handleAdoptClick = (index) => {
    const updatedAdopted = [...adopted];
    updatedAdopted[index] = true;
    setAdopted(updatedAdopted);
  };

  const getDogName = (index) => {
    switch (index) {
      case 1:
        return "Jefe";
      case 2:
        return "Juli";
      case 3:
        return "Santi";
      case 4:
        return "Cleo";
      default:
        return `Perrito ${index}`;
    }
  };

  const getDogDescription = (index) => {
    switch (index) {
      case 1:
        return "Hermoso perrito criado en ambiente familiar listo para llegar a tu hogar.";
      case 2:
        return "El cachorro ideal para acompañar tus tardes de paseo por el parque.";
      case 3:
        return "Una ternura, capaz de robar hasta el corazón más frío.";
      case 4:
        return "Él solo quiere ser parte de tu familia.";
      default:
        return "Descripción del perrito.";
    }
  };

  const getDogImage = (index) => {
    switch (index) {
      case 1:
        return "https://cdn.pixabay.com/photo/2016/07/11/07/33/animals-1509196_1280.jpg";
      case 2:
        return "https://cdn.pixabay.com/photo/2020/07/17/06/41/puppy-5413165_1280.jpg";
      case 3:
        return "https://cdn.pixabay.com/photo/2019/05/27/19/07/puppies-4233375_1280.jpg";
      case 4:
        return "https://cdn.pixabay.com/photo/2024/01/15/21/16/dog-8510901_1280.jpg";
      default:
        return "URL de la imagen por defecto";
    }
  };

  return (
    <div className="app">
      <Header title="El Club de Las Pulgas" />
      <div className="card-container">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="card-item">
            <MyCard
              defaultImage={getDogImage(index + 1)}
              defaultName={getDogName(index + 1)}
              defaultDescription={getDogDescription(index + 1)}
            />
            <Tags text="Disponible para ti" color="primary" />
            {adopted[index] ? (
              <p>Felicidades, ¡ya fue adoptado!</p>
            ) : (
              <button onClick={() => handleAdoptClick(index)}>¡Adóptame!</button>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
