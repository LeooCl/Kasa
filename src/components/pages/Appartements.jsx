import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Collapse from "@partials/Collapse/Collapse.jsx";
import Slideshow from "@partials/Slideshow/Slideshow.jsx";
import Features from "@partials/Features/Features.jsx";
import redstar from "../../assets/redstar.png";
import greystar from "../../assets/greystar.png";

function Lodging() {
  // Utiliser le hook useParams de React Router pour extraire la valeur du paramètre URL appelé "id" et ainsi récupérer la valeur de l'ID du logement depuis l'URL
  const idLodging = useParams("id").id;

  // Utiliser le hook useNavigate pour obtenir la fonction de navigation qui sera utilisée pour rediriger l'utilisateur
  const navigate = useNavigate();

  // Utilisation du hook useState pour initialiser l'état local d'hébergement avec null
  const [lodging, setLodging] = useState(null);

  // Utiliser le hook useEffect pour effectuer une requête avec fetch afin d'obtenir les données d'hébergement à partir du fichier JSON local (appartements.json)
  useEffect(() => {
    fetch("/appartements.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        "";
        const data = json.find((data) => data.id === idLodging) || null;
        if (data === null) {
          return navigate("/404");
        } else {
          setLodging(data);
        }
      })
      .catch(function (e) {
        console.log(e);
      });
  }, [idLodging, navigate]);

  // Paramétrez la fonction renderStars pour générer les images d'étoiles correspondant à la note attribuée à chaque hébergement
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starImage = i <= lodging.rating ? redstar : greystar;
      stars.push(
        <img
          key={i}
          src={starImage}
          alt="Lodging of rating"
          title="Number of stars for accommodation"
        />
      );
    }
    return stars;
  };

  return (
    <main>
      {lodging && (
        <div>
          <section>
            <div>
              {/* Utilisation du composant Slideshow */}
              <Slideshow pictures={lodging.pictures} title={lodging.title} />
            </div>
          </section>
          <section>
            {/* Utilisation du composant Features */}
            <Features
              title={lodging.title}
              location={lodging.location}
              tag={lodging.tags}
              host={
                <span>
                  {lodging.host.name.split(" ")[0]}
                  <br />
                  {lodging.host.name.split(" ")[1]}
                </span>
              }
              picture={lodging.host.picture}
              rating={renderStars()}
            />
            {/* Utilisation du composant Collapse */}
            <div className="style-collapse-in-lodging-page">
              <div className="collapse-in-lodging">
                <Collapse
                  aboutTitle="Description"
                  aboutText={lodging.description}                
                />
              </div>
              <div className="collapse-in-lodging">
                <Collapse
                  aboutTitle="Équipements"
                  aboutText={lodging.equipments.join(", ")}
                />
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default Lodging;
