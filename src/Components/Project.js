import React, {Component} from "react";
import "./Project.css"
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
        /*return (
            <div className={"project-container"} key={this.props.data}>
                <div className={"project-container-container"}>
                    <div className={"project-information-container"}>
                        <div className={"project-information"}>
                            {this.props.data.link.length > 0 ? <a href={this.props.data.link}>{this.props.data.name}</a> : <div className={'project-information-nolink'}>{this.props.data.name}</div>}
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
                                    <div className={"project-information-info-value"}>{this.props.data.studio}</div>
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
                        <div className={"project-information-img-container"}>
                            {this.props.data.image.length > 0 ? <img src={projectImages[this.props.data.image]} alt={this.props.data.title} /> : null}
                        </div>
                    </div>
                    <p>{this.props.data.description}</p>
                </div>
            </div>
        );*/
        return (
            <div className={"project-container"} key={this.props.data}>
                <div className={"project-container-container"}>
                    <div className={"project-information-container"}>
                        {this.props.data.link.length > 0 ? <a href={this.props.data.link}>{this.props.data.name}</a> : <div className={'project-information-nolink'}>{this.props.data.name}</div>}
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
                                    <div className={"project-information-info-value"}>{this.props.data.studio}</div>
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
                    <p>{this.props.data.description}</p>
                </div>
            </div>
        );
    }
}

export default Project;