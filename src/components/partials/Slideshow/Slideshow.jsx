import React from 'react';
import { useState } from "react";
import arrowprevious from '../../../assets/arrowprevious.png';
import arrownext from '../../../assets/arrownext.png';

// Déclaration du composant Gallery avec une fonction 
function Gallery(props) {

	// Définition de l'état local de `slideIndex` à 0 à l'aide du hook useState
	const [slideIndex, setSlideIndex] = useState(0);

	// Déclaration d'une fonction qui servira à passer à l'image précédente dans le composant Galerie
	const prevSlide = () => {
		setSlideIndex(slideIndex === 0 ? props.pictures.length - 1 : slideIndex - 1);
	};

	// Déclaration d'une fonction qui servira à passer à l'image suivante dans le composant Galerie
	const nextSlide = () => {
		setSlideIndex(slideIndex === props.pictures.length - 1 ? 0 : slideIndex + 1);
	};

	return (
		<div className="slider">
			{/* Utilisation de la méthode map sur le tableau props.pictures pour itérer sur chaque élément de l'image */}
			{props.pictures && props.pictures.length > 0 && props.pictures.map((picture, index) => 
				<div key={index}>
					<img className={(index === slideIndex) ? `slider-item slider-item-${index} slider-item-show` : `slider-item slider-item-${index}`} src={picture} alt={props.title} title={props.title}/>
					{/* Vérifiez que props.pictures est bien supérieur à 1 */}
					{props.pictures.length > 1 && (
						<div>
							<div className='arrow-position-to-switch'>
								<img
									className='arrow-previous'
									src={arrowprevious}
									alt="previous visual"
									onClick={prevSlide}
								/>
								<div>
									<p className='counter'>{slideIndex + 1} / {props.pictures.length}</p>
								</div>
								<img
									className='arrow-next'
									src={arrownext}
									alt="next visual"
									onClick={nextSlide}
								/>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Gallery;