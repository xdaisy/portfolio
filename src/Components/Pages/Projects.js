import React, {Component} from "react";
import "./Projects.css"
import ProjectList from "./../ProjectList.js";

const ProjectType = {
    professional: "professional",
    personal: "personal"
};

class Projects extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            projectType: ProjectType.professional
        };
    }

    onClickProfessional = () => {
        this.setState({
            projectType: ProjectType.professional
        });
    }

    onClickPersonal = () => {
        this.setState({
            projectType: ProjectType.personal
        });
    }

    render() {
        return (
            <div className='projects-container'>
                <h1 className={'projects-header'}>Projects</h1>
                <div className={'projects-options'}>
                    <div className={this.state.projectType === ProjectType.professional ? 'projects-options-highlight' : '' } onClick={this.onClickProfessional}>Professional</div>
                    <div className={this.state.projectType === ProjectType.personal ? 'projects-options-highlight' : '' } onClick={this.onClickPersonal}>Personal</div>
                </div>
                <ProjectList isProfessional={this.state.projectType === ProjectType.professional} />
            </div>
        );
    }
}

export default Projects;