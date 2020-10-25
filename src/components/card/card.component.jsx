import React from 'react';
import './card.styles.css';

export const Card = (props) => (
<div className="card-container">
    <img src={'https://robohash.org/'+props.avatar.id+'?set=set5&size=180x180'} alt=""/>
    <h2>{props.avatar.name}</h2>
<p>{props.avatar.email}</p>
</div>
);