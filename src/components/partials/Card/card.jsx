import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => (
	<article className='cards-in-home-page'>
	  <Link to={`/logement/${props.id}`}>
		<div className='overlay'></div>
		<img src={props.cover} alt={props.title} title={props.title} />
		<h3>{props.title}</h3>
	  </Link>
	</article>
);

export default Card;