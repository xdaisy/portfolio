import React, {Component} from "react";
import "./Project.css"
import WonderWoman from './../Resources/WonderWoman.png';
import ProjectSwagger from './../Resources/ProjectSwagger.png';
import CatNyap from './../Resources/CatNyap.png';
import Osmosis from './../Resources/Osmosis.png';

const projectImages = {
    "wonderwoman": WonderWoman,
    "projectswagger": ProjectSwagger,
    "catnyap": CatNyap,
    "osmosis": Osmosis
};

class Project extends Component{
    render() {
        return (
            <div className={"project-container"} key={this.props.data.name}>
                <div className={"project-container-container"}>
                    <div className={"project-information-container"}>
                        {this.props.data.link.length > 0 ? <a href={this.props.data.link} target="_blank" rel="noreferrer">{this.props.data.name}</a> : <div className={'project-information-nolink'}>{this.props.data.name}</div>}
                        <div className={"project-information"}>
                            {this.props.data.image.length > 0 ? (<div className={"project-information-img-container"}>
                                <img src={projectImages[this.props.data.image]} alt={this.props.data.title} />
                            </div>) : null}
                            <div className={"project-information-info-container"}>
                                <div className={"project-information-info"}>
                                    <div>Genre:</div>
                                    <div className={"project-information-info-value"}>{this.props.data.genre}</div>
                                </div>
                                <div className={"project-information-info"}>
                                    <div>Platform:</div>
                                    <div className={"project-information-info-value"}>{this.props.data.platform}</div>
                                </div>
                                <div className={"project-information-info"}>
                                    <div>Studio:</div>
                                    <div className={"project-information-info-value"}>{this.props.data.studio}</div>
                                </div>
                                <div className={"project-information-info"}>
                                    <div>Date:</div>
                                    <div className={"project-information-info-value"}>{this.props.data.date}</div>
                                </div>
                                <div className={"project-information-info"}>
                                    <div>Role:</div>
                                    <div className={"project-information-info-value"}>{this.props.data.role}</div>
                                </div>
                                <div className={"project-information-info"}>
                                    <div>Engine:</div>
                                    <div className={"project-information-info-value"}>{this.props.data.engine}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.props.data.game_description.length > 0 ? (<p>{this.props.data.game_description}</p>) : null}
                    <p>{this.props.data.job_description}</p>
                </div>
            </div>
        );
    }
}

export default Project;