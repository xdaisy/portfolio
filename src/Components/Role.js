import React from "react";
import "./Pages/Home.css";

const Role = (props) => {
    let games = props.data.games.map((game) => {
        return (<div key={game}>{game}</div>);
    });

    let description = props.data.description.map((description) => {
        return (<li key={description}>{description}</li>);
    });

    return (
        <div className={'role-container'} key={props.data.name}>
            <div className={'role-info-container'}>
                <div className={'home-label'}>Role:</div>
                <div>{props.data.role}</div>
            </div>
            <div className={'role-info-container'}>
                <div className={'home-label'}>Games:</div>
                <div className={'role-games-container'}>{games}</div>
            </div>
            <ul className={'role-description-container'}>{description}</ul>
        </div>
    );
}

export default Role;