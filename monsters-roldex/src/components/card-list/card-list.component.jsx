//NOTE: Our Card-List component should only worry about rendering the cards and not about creating the cards

import React from "react";
import './card-list.styles.css';
import { Card } from "../card/card.component"; 

export const CardList = props => {
    console.log(props);
    return(
        <div className="card-list">
            { props.monsters.map(monster => (
            <Card key={monster.id} monster = {monster}/> 
            ))}
        </div>
    )
}