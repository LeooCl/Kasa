import React from 'react';
import { useState, useEffect } from "react";
import Banner from "@partials/Banner/banner";
import image from '@/assets/imgbannerhome.png';
import Card from '@partials/Card/card';

const Home = () => {
  // Utilisation de useState pour initialiser l'état local des hébergements avec un tableau vide
  const [lodgings, setLodgings] = useState([]);

  // Utiliser le hook useEffect pour effectuer une requête avec fetch afin d'obtenir les données d'hébergement à partir du fichier JSON local (appartements.json)
  useEffect(() => {
    fetch("/appartements.json")
      .then(response => response.json())
      .then(json => setLodgings(json))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
    <main>
      <section>
        <div className='banner-style-in-home-page'>
          {/* Utilisation du composant Banner */}
          <Banner
            title={'Chez vous, partout et ailleurs'}
            image={image}
          />
        </div>
      </section>
      <section>
        <div className="lodging-list">
          {/* Utilisation du composant Card */}
          {/* La méthode .map() est utilisée pour itérer sur chaque élément du tableau appartements. Pour chaque hébergement, le composant Carte est rendu */}
          {lodgings && lodgings.length > 0 && lodgings.map(lodging =>
            <Card
              key={lodging.id}
              id={lodging.id}
              title={lodging.title}
              cover={lodging.cover}
            />
          )}
        </div>
      </section>
    </main>
    </>
  );
};

export default Home;