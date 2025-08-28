import React from "react";
import "./Pages/Home.css";
import Role from "./Role";

const Company = (props) => {
    let positionKeys = Object.keys(props.data.positions);
    let positions = positionKeys.map(key => {
        return <Role data={props.data.positions[key]} key={key}/>
    })
    return (
        <div className={'company-container'} key={props.data.name}>
            <div className={'company-name'}>{props.data.name}</div>
            <div className={'company-info-container'}>
                <div className={'home-label'}>Date: </div>
                <div>{props.data.date}</div>
            </div>
            {positions}
        </div>
    );
};

export default Company;