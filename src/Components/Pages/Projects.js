import React, {Component} from "react";
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
            <div>
                <h1>Projects</h1>
                <div>
                    <div onClick={this.onClickProfessional}>Professional</div>
                    <div onClick={this.onClickPersonal}>Personal</div>
                </div>
                <ProjectList isProfessional={this.state.projectType === ProjectType.professional} />
            </div>
        )
    }
}

export default Projects;