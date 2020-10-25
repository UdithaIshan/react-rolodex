import React from 'react';
import './card-list.styles.css';

export const CardList = (props) => {
    return <div className="card-list">
        {props.avatars.map((avatar) => (
          <h1 key={avatar.key}>{avatar.name}</h1>
        ))}
        </div>;
}