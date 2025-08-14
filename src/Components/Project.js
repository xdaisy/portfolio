import React, {Component} from "react";

import WonderWoman from './../Resources/WonderWoman.png';
import ProjectSwagger from './../Resources/ProjectSwagger.png';
import CatNyap from './../Resources/CatNyap.png';

const projectImages = {
    "wonderwoman": WonderWoman,
    "projectswagger": ProjectSwagger,
    "catnyap": CatNyap
};

class Project extends Component{
    render() {
        return (
            <div key={this.props.data}>
                <div>
                    <div>
                        {this.props.data.link.length > 0 ? <a href={this.props.data.link}>{this.props.data.name}</a> : <h1>{this.props.data.name}</h1>}
                        <div>Genre: {this.props.data.genre}</div>
                        <div>Platform: {this.props.data.platform}</div>
                        <div>Studio: {this.props.data.studio}</div>
                        <div>Date: {this.props.data.date}</div>
                        <div>Role: {this.props.data.role}</div>
                        <div>Engine: {this.props.data.engine}</div>
                    </div>
                    {this.props.data.image.length > 0 ? <img src={projectImages[this.props.data.image]} alt={this.props.data.title} /> : null}
                </div>
                <p>{this.props.data.description}</p>
            </div>
        )
    }
}

export default Project;