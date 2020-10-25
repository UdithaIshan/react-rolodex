import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component'

export const CardList = (props) => {
    return <div className="card-list">
        {props.avatars.map((avatar) => (
          <Card key="avatars.key" avatar={avatar}/> 
        ))}
        </div>;
}