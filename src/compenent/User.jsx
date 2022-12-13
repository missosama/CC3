import React from "react";
import './compenent.css';
export default function user(props){
    return(
        <div className="user">
            <div className="us">
            <img src={props.img} alt="" />
            <div>
                <h1>{props.firstName} {props.lastName}</h1>
                <button onClick={props.details}>Detail User</button>
                <button onClick={props.Posts}>Liste des Postes</button>
            </div>
            </div>
          
        </div>
    )
}


